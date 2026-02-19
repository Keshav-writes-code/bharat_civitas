import { column, defineTable } from "astro:db";
import { villages_list } from "./location_data";
import { users } from "./auth";

export const posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    village_id: column.number({ references: () => villages_list.columns.id }),
    metadata: column.json(),
    user_id: column.number({ references: () => users.columns.id }),
    likes: column.number(),
    post_type: column.text({ enum: ["request", "news"] }),
  },
});
