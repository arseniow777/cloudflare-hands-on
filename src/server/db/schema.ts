import { integer, text, sqliteTable, check } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const usersTable = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    email: text("email").notNull().unique(),
    password_hash: text("password_hash").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
  },
  (table) => [check("email_format", sql`${table.email} LIKE '%@%.%'`)],
);

export type newUsers = typeof usersTable.$inferInsert;
