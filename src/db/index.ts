import { drizzle } from "drizzle-orm/neon-http"

// Created database client, our app will talk to our database
export const db = drizzle(process.env.DATABASE_URL!)


