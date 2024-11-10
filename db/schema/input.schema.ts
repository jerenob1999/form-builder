import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  numeric,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { FormTable } from "./form.schema";

export const InputTable = pgTable("input", {
  id: serial("id").primaryKey(),
  formId: integer("form_id"),
  required: boolean("required").notNull(),
  placeholder: text("placeholder").notNull(),
  helperText: text("helperText").notNull(),
  type: text("type").notNull(),
  label: text("label").notNull(),
  order: numeric("order").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const postsRelations = relations(InputTable, ({ one }) => ({
  form: one(FormTable, {
    fields: [InputTable.formId],
    references: [FormTable.id],
  }),
}));
