const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { requireApiKey } = require("./middleware/auth");
const { healthRouter } = require("./routes/health");
const { employeesRouter } = require("./routes/employees");
const { approvalsRouter } = require("./routes/approvals");
const { integrationRunsRouter } = require("./routes/integration-runs");
const { webhooksRouter } = require("./routes/webhooks");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use(requireApiKey);
app.use("/employees", employeesRouter);
app.use("/approvals", approvalsRouter);
app.use("/integration-runs", integrationRunsRouter);
app.use("/webhooks", webhooksRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    error: err.code || "internal_error",
    message: err.message || "Unexpected server error"
  });
});

app.listen(port, () => {
  console.log(`Enterprise Integration API listening on port ${port}`);
});

