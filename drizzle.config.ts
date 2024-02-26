import type { Config } from "drizzle-kit"

const config: Config = {
    schema: "./postgres/tables/*.ts",
    out: "./postgres/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL
    }
}

export default config