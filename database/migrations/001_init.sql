create extension if not exists "uuid-ossp";

create table if not exists employees (
  id uuid primary key default uuid_generate_v4(),
  external_request_id text not null unique,
  first_name text not null,
  last_name text not null,
  email text not null,
  department text not null,
  manager_email text not null,
  start_date date not null,
  equipment_needed text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists approvals (
  id uuid primary key default uuid_generate_v4(),
  external_request_id text not null,
  approver_email text not null,
  decision text not null check (decision in ('approved', 'rejected')),
  comments text,
  created_at timestamptz not null default now()
);

create table if not exists integration_runs (
  id uuid primary key default uuid_generate_v4(),
  source_system text not null,
  target_system text not null,
  business_object text not null,
  external_request_id text not null,
  status text not null check (status in ('pending', 'success', 'failed', 'retrying')),
  message text,
  retry_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor text not null,
  action text not null,
  business_object text not null,
  external_request_id text,
  payload jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists idx_employees_external_request_id on employees (external_request_id);
create index if not exists idx_integration_runs_status on integration_runs (status);
create index if not exists idx_integration_runs_external_request_id on integration_runs (external_request_id);

