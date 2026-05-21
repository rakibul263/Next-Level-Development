import { neon } from "@neondatabase/serverless"
import config from "../../config"
import type { PUser } from "./profile.interface";

const sql = neon(config.database_url);
export const createProfileIntoDB = async(payload: PUser, user_id: number) => {
    const result = await sql`
        INSERT INTO profile(user_id, bio, address, phone, gender)
        VALUES(
            ${user_id},
            ${payload.bio},
            ${payload.address},
            ${payload.phone},
            ${payload.gender}
        )
        RETURNING user_id, bio, address, phone, gender
    `;
    return result;
}