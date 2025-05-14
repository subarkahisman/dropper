import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATAABASE_URL) {
  throw new Error("Database url is not set in .env.local");
}
