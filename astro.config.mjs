import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

import db from "@astrojs/db";

export default defineConfig({
  integrations: [UnoCSS(), svelte(), db()],
  site: "https://Keshav-writes-code.github.io",
  base: "DUAS-template",
});