create table if not exists leads (
  id text primary key,
  name text not null,
  email text not null default '',
  phone text not null default '',
  city text not null default '',
  product text not null,
  description text not null default '',
  price numeric(10, 2) not null default 45,
  notes text not null default '',
  status text not null default 'waitlist_pending',
  waitlist_position integer not null,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx on leads (email);
create unique index if not exists leads_email_unique_when_present
  on leads (lower(email))
  where email <> '';
