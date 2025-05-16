import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("Database url is not set in .env.local");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: "__drizzle_migration",
    schema: "public",
  },
  verbose: true,
  strict: true,
});
