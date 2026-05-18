const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_ROLE}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
});
