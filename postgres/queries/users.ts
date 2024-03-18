import { users } from "../schema/users"
import { postgres } from ".."
import { eq, sql } from "drizzle-orm"

export const findUserByEmail = (email: string) => {

    const query = postgres
        .select()
        .from(users)
        .where(eq(users.email, sql.placeholder("email")))
        .prepare("find_user_by_email")

    return query.execute({ email: email })
}