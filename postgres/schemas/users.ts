import {
    pgTable,
    text,
    timestamp
} from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("email_verified", { mode: "date" }),
    image: text("image"),
})