const { Router } = require("express");
const db = require("../db");

const integrationRunsRouter = Router();

integrationRunsRouter.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      "select * from integration_runs order by created_at desc limit 100"
    );
    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
});

module.exports = { integrationRunsRouter };

