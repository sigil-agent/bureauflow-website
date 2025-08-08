# Netlify Auto‑Fix Pack

This pack contains a sample configuration that makes Netlify builds more resilient and easier to diagnose. It includes:

- **`netlify.toml`** – The central configuration file that tells Netlify how to build and publish your site. Adjust the `command` and `publish` settings to match your framework, and set a specific `NODE_VERSION` to ensure consistent builds.
- **`.github/workflows/netlify-auto-fix.yml`** – A GitHub Actions workflow that listens for failed Netlify deploys. If a deploy fails, it runs [Netlify CI Doctor](https://github.com/netlify/ci-docs) to surface detailed diagnostics and then optionally triggers a manual redeploy via the Netlify CLI. To enable the auto‑retry step, add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets to your repository.

## Usage

1. Copy the contents of this directory into the root of your project (the `.github/workflows` folder may need to be created if it doesn’t exist yet).
2. Edit `netlify.toml`:
   - **`build.command`** – Set this to the command that builds your project. For example, `npm run build` for a Vite or React app, `next build && next export` for Next.js static export, or `gatsby build` for Gatsby.
   - **`build.publish`** – The folder Netlify should upload, e.g. `dist`, `build`, `out`, or `public` depending on your framework.
   - **Environment variables** – Uncomment and list any variables your build requires under `[context.production.environment]`. Always set `NODE_VERSION` to match your local development environment.
3. Commit and push the files to your repository. Netlify will automatically pick up `netlify.toml` on the next deploy.
4. (Optional) To enable the auto‑retry workflow:
   - Create two secrets in your GitHub repository settings:
     - `NETLIFY_AUTH_TOKEN` – Create a personal access token in your Netlify account. See [the Netlify docs](https://docs.netlify.com/cli/get-started/#obtain-a-personal-access-token).
     - `NETLIFY_SITE_ID` – Find your site ID in the Netlify dashboard under **Site settings → General → Site details**.
   - After adding these secrets, the `netlify-auto-fix.yml` workflow will automatically attempt a manual deploy whenever a Netlify deploy triggered by GitHub Actions fails.

## Customising further

This pack uses sensible defaults, but you can customise it further:

- **Multiple contexts** – Add `[context.deploy-preview]`, `[context.branch-deploy]`, or other contexts in `netlify.toml` to fine‑tune commands for different deploy types.
- **Different Node versions** – Set `NODE_VERSION` to the same version used locally. Keeping Netlify in sync with your development environment prevents many runtime errors.
- **Additional workflows** – Use the output of `ci-doctor` to identify missing dependencies or misconfigured imports. You can create separate GitHub Action jobs to run tests or lint your code before deploying.

## Caveats

This pack doesn’t magically fix all build failures; instead, it gives you visibility into what’s wrong and retries deploys automatically when you provide Netlify credentials. You still need to ensure your project is set up correctly (e.g. correct build command, complete dependencies, case‑sensitive imports). See the comments in `netlify.toml` for guidance.
