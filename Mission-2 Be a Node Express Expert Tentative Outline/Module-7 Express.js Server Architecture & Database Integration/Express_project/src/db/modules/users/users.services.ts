import { dbConnection } from "../../database";
import type { IUser } from "./users.interface";

const createUserIntoDB = async (payload: IUser) => {
  const { name, email, password, age } = payload;
  // data insert on database
  const insertData = await dbConnection.query(
    `
            INSERT INTO users(name, email, password, age)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `,
    [name, email, password, age],
  );
  return insertData;
};

// get all user
const getUserIntoDB = async () => {
  const getData = await dbConnection.query(
    `
        SELECT * FROM users
        ORDER BY id ASC
        `,
  );
  return getData;
};

// get specific user using id
const getUserByIdIntoDB = async (payload: any) => {
  const { id } = payload;
  const getUserById = await dbConnection.query(
    `
            SELECT * FROM users
            WHERE id = $1
        `,
    [id],
  );
  return getUserById;
};

// update user
const updateUserIntoDb = async (payload: any) => {
  const { id } = payload.params;
  const { name, email, password, age } = payload.body;

  const updateUserUsingId = await dbConnection.query(
    `
                UPDATE users
                SET 
                    name = COALESCE($1, name),
                    email = COALESCE($2, email),
                    password = COALESCE($3, password),
                    age = COALESCE($4, age),
                    updated_at = NOW()
                WHERE id = $5
                RETURNING *
            `,
    [name, email, password, age, id],
  );
  return updateUserUsingId;
};

// delete user
const deleteUserIntoDb = async (payload: any) => {
  const { id } = payload;
  await dbConnection.query(
    `
            DELETE FROM users
            WHERE id = $1
        `,
    [id],
  );
};

export const userService = {
  createUserIntoDB,
  getUserIntoDB,
  getUserByIdIntoDB,
  updateUserIntoDb,
  deleteUserIntoDb,
};
