import { Pool } from "pg";

export const pool = new Pool({
  user: "xxx@xxxx",
  host: "xxxxx",
  password: "xxxxx",
  database: "xxxxx",
  port: 5050,
});
