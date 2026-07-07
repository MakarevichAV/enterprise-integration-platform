const { Router } = require("express");
const { z } = require("zod");
const db = require("../db");
const { recordIntegrationRun } = require("../services/integration-runs");

const employeesRouter = Router();

const employeeSchema = z.object({
  externalRequestId: z.string().min(3),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  department: z.string().min(2),
  managerEmail: z.string().email(),
  startDate: z.string().date(),
  equipmentNeeded: z.array(z.string()).default([])
});

employeesRouter.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      "select * from employees order by created_at desc limit 50"
    );
    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
});

employeesRouter.post("/", async (req, res, next) => {
  const parsed = employeeSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "validation_error",
      details: parsed.error.flatten()
    });
  }

  const input = parsed.data;

  try {
    const result = await db.query(
      `insert into employees
        (external_request_id, first_name, last_name, email, department, manager_email, start_date, equipment_needed)
       values ($1, $2, $3, $4, $5, $6, $7, $8)
       on conflict (external_request_id) do update set
        first_name = excluded.first_name,
        last_name = excluded.last_name,
        email = excluded.email,
        department = excluded.department,
        manager_email = excluded.manager_email,
        start_date = excluded.start_date,
        equipment_needed = excluded.equipment_needed
       returning *`,
      [
        input.externalRequestId,
        input.firstName,
        input.lastName,
        input.email,
        input.department,
        input.managerEmail,
        input.startDate,
        input.equipmentNeeded
      ]
    );

    await recordIntegrationRun({
      sourceSystem: "api",
      targetSystem: "postgresql",
      businessObject: "employee",
      externalRequestId: input.externalRequestId,
      status: "success",
      message: "Employee request upserted"
    });

    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = { employeesRouter };

