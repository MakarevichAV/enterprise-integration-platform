const db = require("../db");

async function recordIntegrationRun({
  sourceSystem,
  targetSystem,
  businessObject,
  externalRequestId,
  status,
  message
}) {
  await db.query(
    `insert into integration_runs
      (source_system, target_system, business_object, external_request_id, status, message)
     values ($1, $2, $3, $4, $5, $6)`,
    [sourceSystem, targetSystem, businessObject, externalRequestId, status, message]
  );
}

module.exports = { recordIntegrationRun };

