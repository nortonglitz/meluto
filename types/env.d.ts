namespace NodeJS {
    interface ProcessEnv {
        POSTGRES_URL: string

        AUTH_GOOGLE_ID: string
        AUTH_GOOGLE_SECRET: string
        AUTH_SECRET: string

        EMAIL_SERVER_USER: string
        EMAIL_SERVER_API_KEY: string
        EMAIL_SERVER_API_URL: string
        EMAIL_SERVER_HOST: string
        EMAIL_SERVER_PORT: string
        EMAIL_FROM: string
    }
}