# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure test

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment (Cloudflare Workers and Decap CMS)

The production site runs as the Cloudflare Worker named
`le-bouillon-restaurant`. Decap CMS is available at
`https://lebouillondeseauxvives.fr/admin` and uses GitHub OAuth to commit content
changes to `Charon42520/le-bouillon-restaurant` on the `main` branch.

### 1. Deploy the Worker

Install the dependencies, authenticate Wrangler with the Cloudflare account that
owns the domain, then build and deploy:

```sh
bun install --frozen-lockfile
bunx wrangler login
bun run build
bunx wrangler deploy
```

In the Cloudflare dashboard, open the `le-bouillon-restaurant` Worker and add
`lebouillondeseauxvives.fr` as a custom domain under **Settings > Domains &
Routes**. The domain must be active before testing OAuth because the CMS uses
this production URL as its authentication base URL.

### 2. Deploy CMS changes automatically

Decap CMS publishes by committing directly to `main`. To deploy those commits,
open the Worker in Cloudflare, go to **Settings > Builds**, and
[connect the `Charon42520/le-bouillon-restaurant` GitHub repository](https://developers.cloudflare.com/workers/ci-cd/builds/)
with these settings:

- **Production branch:** `main`
- **Build command:** `bun run build`
- **Deploy command:** `bunx wrangler deploy`
- **Root directory:** leave empty

This Cloudflare GitHub connection is separate from the OAuth application below:
the connection deploys commits, while the OAuth application signs CMS users in.

### 3. Create the GitHub OAuth application

In GitHub, open **Settings > Developer settings > OAuth Apps > New OAuth App**
(or use the [new OAuth application form](https://github.com/settings/applications/new))
and enter:

- **Application name:** `Le Bouillon Decap CMS` (or another descriptive name)
- **Homepage URL:** `https://lebouillondeseauxvives.fr`
- **Authorization callback URL:**
  `https://lebouillondeseauxvives.fr/oauth/callback`

After creating the application, generate a client secret and keep both the
client ID and client secret available for the next step. The callback URL must
match exactly, including `https` and the `/oauth/callback` path.

### 4. Add the OAuth credentials to the Worker

Store both values as encrypted Worker secrets. Each command prompts for its
value:

```sh
bunx wrangler secret put GITHUB_CLIENT_ID
bunx wrangler secret put GITHUB_CLIENT_SECRET
```

Do not commit these values to the repository or add them to `wrangler.toml`.
These are runtime secrets, not Cloudflare build variables. If configuring them
in the dashboard instead of with Wrangler, use **Settings > Variables &
Secrets** on the Worker.

Anyone signing in to the CMS must have permission to push to
`Charon42520/le-bouillon-restaurant`; the OAuth application authenticates the
user but does not grant repository access by itself.

### 5. Verify the CMS

Open `https://lebouillondeseauxvives.fr/admin`, select **Login with GitHub**, and
authorize the OAuth application. After editing and publishing an entry, confirm
that Decap CMS created a commit on the `main` branch and that the updated site
was deployed.

For a later manual deployment, only the build and deploy commands are required:

```sh
bun run build
bunx wrangler deploy
```

If the production hostname changes, update both `site` in `astro.config.mjs` and
`WEBSITE_URL` in `src/lib/constants.ts`, update the GitHub OAuth callback URL,
then rebuild and redeploy.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
