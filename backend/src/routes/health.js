const { Router } = require("express");

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "enterprise-integration-api"
  });
});

module.exports = { healthRouter };

