import { column, defineTable } from "astro:db";
import { villages_list } from "./location_data";

export const users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    village_id: column.number({ references: () => villages_list.columns.id }),
    profile_img_url: column.text(),
  },
});
