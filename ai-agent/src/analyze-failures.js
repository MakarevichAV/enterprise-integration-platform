function summarizeFailures(integrationRuns) {
  const failedRuns = integrationRuns.filter((run) => run.status === "failed");

  return {
    failedCount: failedRuns.length,
    requestIds: failedRuns.map((run) => run.external_request_id),
    summary: failedRuns.length
      ? "There are failed integration runs that need validation, authentication, or retry review."
      : "No failed integration runs found."
  };
}

module.exports = { summarizeFailures };

