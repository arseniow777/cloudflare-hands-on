import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db";

import type { newUsers } from "./schema";
import * as schema from "./schema";

export const insertUsers = async (
  d1Database: D1Database,
  newUsers: newUsers,
) => {
  const db = getDb(d1Database);
  const result = await db.insert(schema.usersTable).values(newUsers);
  return result;
};

export const getUsersByEmail = (d1Database: D1Database, email: string) => {
  
};
