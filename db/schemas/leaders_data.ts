import { column, defineTable } from "astro:db";
import { villages_list } from "./location_data";
export const leaders_list = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    village_id: column.number({ references: () => villages_list.columns.id }),
    party: column.text(),
  },
});

export const leader_votes = defineTable({
  columns: {
    leader_id: column.number({ primaryKey: true }),
  },
});
