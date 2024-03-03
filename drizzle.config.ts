import type { Config } from "drizzle-kit"

export default {
    schema: "./postgres/schema/*",
    out: "./postgres/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL
    }
} satisfies Config