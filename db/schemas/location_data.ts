import { column, defineDb, defineTable } from "astro:db";
export const villages_list = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    district: column.text(),
    state: column.text(),
  },
});
