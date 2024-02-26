import {
    pgTable,
    text,
    timestamp
} from "drizzle-orm/pg-core"

import { users } from "./users"


export const sessions = pgTable(
    "session",
    {
        created_at: timestamp("created_at").defaultNow().notNull(),
        updated_at: timestamp("updated_at").defaultNow().notNull(),
        sessionToken: text("sessionToken")
            .notNull()
            .primaryKey(),
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        expires: timestamp("expires", { mode: "date" })
            .notNull(),
    })