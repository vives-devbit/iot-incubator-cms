# Content v2 Minimal Starter

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## Initial Setup

Why custom setup from scratch and not use template of Netlify? Because I wanted to use Vue3 and Netlify template currently only support Vue2.

1. Setup Nuxt.js. Follow this guide [https://content.nuxtjs.org/get-started](https://content.nuxtjs.org/get-started).
2. Integrate Netlify CMS: [https://www.netlifycms.org/docs/nuxt/](https://www.netlifycms.org/docs/nuxt/)
3. Don't forget to enable following options on Netlify (Can all be found under identity settings):
 * Identify
 * External Providers: github
 * Github gateway
 * Only enable registration by invite
4. Setup Vuetify with Nuxt 3: [https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html](https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html)

## User Registration

Invite users via Netlify => Identify

User than get's invitation link. For the moment we need to change the link to take the `/admin` part into account. So `https://precious-palmier-eb57a6.netlify.app/#invite_token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` becomes `https://precious-palmier-eb57a6.netlify.app/admin/#invite_token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.

The user should then be presented with login.