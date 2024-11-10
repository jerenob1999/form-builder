import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
