import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres"
import * as tables from "./tables"

// If is not possible to find a table, 
// make sure the table is exported in index.ts from schemas folder
export const postgres = drizzle(sql, { schema: tables })