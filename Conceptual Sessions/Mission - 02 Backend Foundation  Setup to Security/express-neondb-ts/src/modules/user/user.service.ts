import { neon } from "@neondatabase/serverless";
import config from "../../config";
import { hashPassword } from "../../utils/hashPassword";
import type { User } from "./user.interface";
const sql = neon(config.database_url);

export const createUserIntoDB = async (payload: User) => {
  const password_hash = await hashPassword(payload.password);

  const result = await sql`
        INSERT INTO users(name,email,password_hash,age)
        VALUES (
      ${payload.name},
      ${payload.email},
      ${password_hash},
      ${payload.age}
    )
    RETURNING id, name, email, age
  `;
  return result;
};

export const getAllUsersIntoDB = async () => {
  const result = await sql`
        SELECT id, name, email, age, role, created_at 
        FROM users 
        ORDER BY id ASC
    `;
  return result;
};

export const getSingleUserIntoDB = async (id: number) => {
  const result = await sql`
    SELECT id, name, email, age, role, created_at 
    FROM users
    WHERE id = ${id} 
  `;
  return result;
};

export const updateUserIntoDB = async (id: number, payload: Partial<User>) => {
  const result = await sql`
      UPDATE users
      SET 
        name = COALESCE(${payload.name}, name),
        email = COALESCE(${payload.email}, email),
        role = COALESCE(${payload.role}, role),
        age = COALESCE(${payload.age}, age),
        updated_at = NOW()
        WHERE id = ${id}
        RETURNING id, name, email, role, updated_at
    `;
  return result;
};

export const deleteUserIntoDB = async (id: number) => {
  const result = await sql`
    DELETE FROM users
    WHERE id = ${id}
    RETURNING id, name, email
  `;
  return result;
};
