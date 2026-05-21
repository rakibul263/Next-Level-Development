import { neon } from "@neondatabase/serverless"
import config from "../../config"
import type { PUser } from "./profile.interface";

const sql = neon(config.database_url);
export const createProfileIntoDB = async(payload: PUser) => {
    const result = sql`
        INSERT INTO profile(bio, address, phone, gender)
        VALUES(
            ${payload.bio},
            ${payload.address},
            ${payload.phone},
            ${payload.gender}
        )
        RETURNING user_id, bio, address, phone, gender
    `;
    return result;
}