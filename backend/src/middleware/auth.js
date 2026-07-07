function requireApiKey(req, res, next) {
  const configuredKey = process.env.API_KEY;

  if (!configuredKey) {
    return next();
  }

  const providedKey = req.header("x-api-key");

  if (providedKey !== configuredKey) {
    return res.status(401).json({
      error: "unauthorized",
      message: "Missing or invalid x-api-key header"
    });
  }

  return next();
}

module.exports = { requireApiKey };

