import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { InputTable } from "./input.schema";

export const FormTable = pgTable("form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const formRelations = relations(FormTable, ({ many }) => ({
  inputs: many(InputTable),
}));
