# DUAS

A Template for your next Web Project

- `D` - DaisyUi
- `U` - Unocss
- `A` - AstroJs
- `S` - Svelte


## Installation / Initialize / Setup

Initalize a DUAS Project with

bun
```bash
bun create astro@latest -- --template Keshav-writes-code/DUAS-template
```

## Stuff Included
### Packages
- Daisyui (latest)
- Unocss (latest)
  - Default Unocss Stuff
  - Unocss Icones Preset (with Tabler Icones Set)
  - tailwind (latest) (used only to serve DaisyUi Classes)
- Astro (latest)
- Svelte (latest)
### Deplot to GH Pages
- Change the value for `base` key in `astro.config.mjs` to basically Define a Sub Path that comes after `https://<your_github_username>.github.io/...` for gh pages hosting
- example: `astro.config.mjs`
```js
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
  }), svelte(), tailwind()],
  site: "https://Keshav-writes-code.github.io",
  base: "new_project",
});
```
- Path on GH Pages = `https://keshavWebDev-personal.github.io/new_project`
- when you do your First Push of a project created with this template (with the `base` and `site` params set) on Github, it will be automatically deployed to GH Pages with the above mentioned resulting URL  


## Installation & Setup in one Go

Copy Paste this in your Bash \ Zsh Terminal

**For** : `Linux : Debian / Ubuntu`
```bash
# Installs Git
sudo apt-get install git &&

# Installs Node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash &&
nvm install 22 &&

# Installs Bun
curl -fsSL https://bun.sh/install | bash &&

# Initialize a project with template in Current Directory
bun create astro@latest -- --template Keshav-writes-code/DUAS-template#master

```


## Screenshots

![localhost_4321_Project_Name](https://github.com/user-attachments/assets/1e772f1e-e4a3-4a6d-8f55-5b97283d01f7)


