import { NextResponse } from "next/server";
import { sendWaitlistEmails } from "@/lib/email";
import { createWaitlistLead, getWaitlistStats } from "@/lib/leads";

const PRODUCT_DEFAULT = "Caja Premium de 50 tequeños crudos";
const DESCRIPTION_DEFAULT = "Caja de 50 unidades";
const PRICE_DEFAULT = 45;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const phone = typeof body.phone === "string" ? body.phone : "";
    const city = typeof body.city === "string" ? body.city : "";
    const product =
      typeof body.product === "string" ? body.product : PRODUCT_DEFAULT;
    const description =
      typeof body.description === "string"
        ? body.description
        : DESCRIPTION_DEFAULT;
    const price =
      typeof body.price === "number" && Number.isFinite(body.price)
        ? body.price
        : PRICE_DEFAULT;
    const notes = typeof body.notes === "string" ? body.notes : "";

    if (!email.trim() && !phone.trim()) {
      return NextResponse.json(
        { error: "Se requiere al menos un email o teléfono de contacto." },
        { status: 400 },
      );
    }

    if (!name.trim()) {
      return NextResponse.json(
        { error: "Se requiere un nombre." },
        { status: 400 },
      );
    }

    const { lead, alreadyJoined } = await createWaitlistLead({
      name,
      email,
      phone,
      city,
      product,
      description,
      price,
      notes,
    });

    const emailResult = alreadyJoined
      ? { confirmationSent: false, ownerNotified: false, skippedReason: "already_joined" }
      : await sendWaitlistEmails(lead);

    console.info(
      `[LEAD] ${alreadyJoined ? "existing" : "new"} ${lead.id} #${lead.waitlistPosition} email=${emailResult.confirmationSent}`,
    );

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      waitlistPosition: lead.waitlistPosition,
      alreadyJoined,
      batchStatus: "sold_out",
      email: {
        confirmationSent: emailResult.confirmationSent,
        ownerNotified: emailResult.ownerNotified,
      },
      message: alreadyJoined
        ? "Ya estabas en la lista de espera. Hemos recuperado tu plaza prioritaria."
        : "Lote semanal agotado. Añadido con prioridad a la lista de espera de la próxima semana.",
    });
  } catch (error) {
    console.error("Error in /api/leads:", error);
    return NextResponse.json(
      { error: "Error interno al registrar el lead." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const stats = await getWaitlistStats();
    return NextResponse.json({
      totalLeads: stats.totalLeads,
      latestPosition: stats.latestPosition,
    });
  } catch (error) {
    console.error("Error in GET /api/leads:", error);
    return NextResponse.json(
      { error: "Error interno al consultar la lista de espera." },
      { status: 500 },
    );
  }
}
