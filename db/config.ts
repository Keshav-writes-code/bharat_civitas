import { defineDb } from "astro:db";
import * as leaders_data from "./schemas/leaders_data.ts";
import * as location_data from "./schemas/location_data.ts";
import * as auth from "./schemas/auth.ts";
import * as post_data from "./schemas/post_data.ts";

export default defineDb({
  tables: { ...leaders_data, ...location_data, ...auth, ...post_data },
});
