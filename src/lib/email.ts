import { Resend } from "resend";
import type { LeadRecord } from "@/lib/leads";

const resendApiKey = process.env.RESEND_API_KEY?.trim() ?? "";
const fromAddress =
  process.env.RESEND_FROM_EMAIL?.trim() || "TEQUEBOX <onboarding@resend.dev>";
const notifyAddress = process.env.LEADS_NOTIFY_EMAIL?.trim() || "";

function getResendClient(): Resend | null {
  if (!resendApiKey) return null;
  return new Resend(resendApiKey);
}

function waitlistConfirmationHtml(lead: LeadRecord): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #0A0E14; line-height: 1.5;">
      <h1 style="font-size: 22px; margin-bottom: 8px;">Tu plaza prioritaria está reservada</h1>
      <p>Hola ${escapeHtml(lead.name)},</p>
      <p>
        El lote semanal de <strong>${escapeHtml(lead.product)}</strong> está agotado.
        Te hemos añadido a la lista de espera con posición
        <strong>#${lead.waitlistPosition}</strong>.
      </p>
      <p>
        Precio congelado: <strong>${lead.price.toFixed(2).replace(".", ",")} €</strong>.
        Compensación por la espera: 1 tarro de salsa tártara artesana gratis.
      </p>
      <p>Te avisaremos el próximo lunes a las 10:00 cuando abra la nueva hornada.</p>
      <p style="color: #64748b; font-size: 13px;">— Equipo TEQUEBOX</p>
    </div>
  `;
}

function ownerNotifyHtml(lead: LeadRecord): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #0A0E14; line-height: 1.5;">
      <h1 style="font-size: 20px;">Nuevo lead en lista de espera</h1>
      <ul>
        <li><strong>Posición:</strong> #${lead.waitlistPosition}</li>
        <li><strong>Nombre:</strong> ${escapeHtml(lead.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(lead.email || "—")}</li>
        <li><strong>Teléfono:</strong> ${escapeHtml(lead.phone || "—")}</li>
        <li><strong>Ciudad:</strong> ${escapeHtml(lead.city || "—")}</li>
        <li><strong>Producto:</strong> ${escapeHtml(lead.product)}</li>
      </ul>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendWaitlistEmails(lead: LeadRecord): Promise<{
  confirmationSent: boolean;
  ownerNotified: boolean;
  skippedReason?: string;
}> {
  const resend = getResendClient();
  if (!resend) {
    console.info(
      "[email] RESEND_API_KEY missing — skipped waitlist emails (local/sample mode)",
    );
    return {
      confirmationSent: false,
      ownerNotified: false,
      skippedReason: "missing_resend_api_key",
    };
  }

  let confirmationSent = false;
  let ownerNotified = false;

  if (lead.email) {
    const { error } = await resend.emails.send(
      {
        from: fromAddress,
        to: lead.email,
        subject: `TEQUEBOX · Plaza #${lead.waitlistPosition} reservada`,
        html: waitlistConfirmationHtml(lead),
      },
      { idempotencyKey: `waitlist-confirm/${lead.id}` },
    );

    if (error) {
      console.error("[email] confirmation failed:", error.message);
    } else {
      confirmationSent = true;
    }
  }

  if (notifyAddress) {
    const { error } = await resend.emails.send(
      {
        from: fromAddress,
        to: notifyAddress,
        subject: `Nuevo lead waitlist #${lead.waitlistPosition} · ${lead.name}`,
        html: ownerNotifyHtml(lead),
      },
      { idempotencyKey: `waitlist-notify/${lead.id}` },
    );

    if (error) {
      console.error("[email] owner notify failed:", error.message);
    } else {
      ownerNotified = true;
    }
  }

  return { confirmationSent, ownerNotified };
}
