import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const weapons = pgTable("weapons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  period: text("period").notNull(),
  yearStart: integer("year_start").notNull(),
  yearEnd: integer("year_end").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  culturalContext: text("cultural_context").notNull(),
});

export const insertWeaponSchema = createInsertSchema(weapons).pick({
  name: true,
  period: true,
  yearStart: true,
  yearEnd: true,
  description: true,
  imageUrl: true,
  culturalContext: true,
});

export type InsertWeapon = z.infer<typeof insertWeaponSchema>;
export type Weapon = typeof weapons.$inferSelect;
