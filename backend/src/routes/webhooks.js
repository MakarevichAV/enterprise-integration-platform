const { Router } = require("express");
const { z } = require("zod");
const { recordIntegrationRun } = require("../services/integration-runs");

const webhooksRouter = Router();

const workatoApprovalSchema = z.object({
  externalRequestId: z.string().min(3),
  recipeId: z.string().min(1),
  eventType: z.literal("onboarding.approved"),
  payload: z.record(z.unknown())
});

webhooksRouter.post("/workato/onboarding-approved", async (req, res, next) => {
  const parsed = workatoApprovalSchema.safeParse(req.body);

  if (!parsed.success) {
    await recordIntegrationRun({
      sourceSystem: "workato",
      targetSystem: "node-api",
      businessObject: "onboarding",
      externalRequestId: req.body.externalRequestId || "unknown",
      status: "failed",
      message: "Invalid Workato webhook payload"
    });

    return res.status(400).json({
      error: "validation_error",
      details: parsed.error.flatten()
    });
  }

  await recordIntegrationRun({
    sourceSystem: "workato",
    targetSystem: "node-api",
    businessObject: "onboarding",
    externalRequestId: parsed.data.externalRequestId,
    status: "success",
    message: "Approved onboarding event received"
  });

  res.status(202).json({
    status: "accepted",
    externalRequestId: parsed.data.externalRequestId
  });
});

module.exports = { webhooksRouter };

