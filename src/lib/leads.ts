import { randomBytes } from "node:crypto";
import { sql } from "@/lib/db";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  city: string;
  product: string;
  description: string;
  price: number;
  notes: string;
};

export type LeadRecord = LeadInput & {
  id: string;
  status: string;
  waitlistPosition: number;
  createdAt: string;
};

type LeadRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  product: string;
  description: string;
  price: string | number;
  notes: string;
  status: string;
  waitlist_position: number;
  created_at: Date | string;
};

const PRODUCT_DEFAULT = "Caja Premium de 50 tequeños crudos";
const DESCRIPTION_DEFAULT = "Caja de 50 unidades";
const PRICE_DEFAULT = 45;

function createLeadId(): string {
  return `lead_${Date.now().toString(36)}${randomBytes(2).toString("hex")}`;
}

function mapLead(row: LeadRow): LeadRecord {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    city: row.city,
    product: row.product,
    description: row.description,
    price: Number(row.price),
    notes: row.notes,
    status: row.status,
    waitlistPosition: row.waitlist_position,
    createdAt:
      typeof row.created_at === "string"
        ? row.created_at
        : row.created_at.toISOString(),
  };
}

export async function findLeadByEmail(email: string): Promise<LeadRecord | null> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;

  const rows = await sql<LeadRow>(
    `select *
     from leads
     where lower(email) = $1
     order by created_at asc
     limit 1`,
    [normalized],
  );

  return rows[0] ? mapLead(rows[0]) : null;
}

export async function createWaitlistLead(
  input: LeadInput,
): Promise<{ lead: LeadRecord; alreadyJoined: boolean }> {
  const email = input.email.trim().toLowerCase();
  const existing = email ? await findLeadByEmail(email) : null;
  if (existing) {
    return { lead: existing, alreadyJoined: true };
  }

  const id = createLeadId();
  const name = input.name.trim() || "Anónimo";
  const phone = input.phone.trim();
  const city = input.city.trim();
  const product = input.product.trim() || PRODUCT_DEFAULT;
  const description = input.description.trim() || DESCRIPTION_DEFAULT;
  const price = Number.isFinite(input.price) ? input.price : PRICE_DEFAULT;
  const notes = input.notes.trim();

  const positionRows = await sql<{ next_position: number }>(
    `select coalesce(max(waitlist_position), 17) + 1 as next_position from leads`,
  );
  const waitlistPosition = Number(positionRows[0]?.next_position ?? 18);

  try {
    const rows = await sql<LeadRow>(
      `insert into leads (
        id, name, email, phone, city, product, description, price, notes, status, waitlist_position
      ) values (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, 'waitlist_pending', $10
      )
      returning *`,
      [id, name, email, phone, city, product, description, price, notes, waitlistPosition],
    );

    return { lead: mapLead(rows[0]), alreadyJoined: false };
  } catch (error) {
    const duplicate = email ? await findLeadByEmail(email) : null;
    if (duplicate) {
      return { lead: duplicate, alreadyJoined: true };
    }
    throw error;
  }
}

export async function getWaitlistStats(): Promise<{
  totalLeads: number;
  latestPosition: number;
}> {
  const rows = await sql<{ total: string | number; latest: string | number | null }>(
    `select count(*)::int as total, coalesce(max(waitlist_position), 0)::int as latest from leads`,
  );

  return {
    totalLeads: Number(rows[0]?.total ?? 0),
    latestPosition: Number(rows[0]?.latest ?? 0),
  };
}
