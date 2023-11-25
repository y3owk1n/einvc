import { env } from "@/env";
import * as schema from "./schema";

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(env.DATABASE_URL);

export const db = drizzle(connection, { schema, mode: "planetscale" });
