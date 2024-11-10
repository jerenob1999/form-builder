import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const FormResponseTable = pgTable("form_response", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
