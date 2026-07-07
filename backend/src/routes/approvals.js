const { Router } = require("express");
const { z } = require("zod");
const db = require("../db");

const approvalsRouter = Router();

const approvalSchema = z.object({
  externalRequestId: z.string().min(3),
  approverEmail: z.string().email(),
  decision: z.enum(["approved", "rejected"]),
  comments: z.string().optional()
});

approvalsRouter.post("/", async (req, res, next) => {
  const parsed = approvalSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "validation_error",
      details: parsed.error.flatten()
    });
  }

  const input = parsed.data;

  try {
    const result = await db.query(
      `insert into approvals
        (external_request_id, approver_email, decision, comments)
       values ($1, $2, $3, $4)
       returning *`,
      [input.externalRequestId, input.approverEmail, input.decision, input.comments || null]
    );

    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = { approvalsRouter };

