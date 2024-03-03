import {
    pgTable,
    text,
    timestamp
} from "drizzle-orm/pg-core"

export const users = pgTable("user", {
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    given_name: text("given_name"),
    family_name: text("family_name"),
    role: text("role"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
})