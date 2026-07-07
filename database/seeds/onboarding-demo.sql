insert into employees (
  external_request_id,
  first_name,
  last_name,
  email,
  department,
  manager_email,
  start_date,
  equipment_needed
) values (
  'SP-ONB-1001',
  'Maya',
  'Cohen',
  'maya.cohen@example.com',
  'Operations',
  'manager@example.com',
  '2026-08-01',
  array['Laptop', 'Microsoft 365 License', 'VPN Access']
) on conflict (external_request_id) do nothing;

