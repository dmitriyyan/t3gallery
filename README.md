# T3 Gallery
## Project Overview
T3 Gallery is a sophisticated image gallery web application developed using Next.js, showcasing robust features like authentication, dynamic content management, and advanced analytics.

## Key Features
- Dynamic Content: Uses Vercel Postgres for database management.
- Authentication: Implemented with Clerk for secure access.
- Image Upload: Enabled through Uploadthing with optimizations via Next.js's image component.
- Error Handling: Managed by Sentry for real-time issue resolution.
- Analytics: Powered by Posthog to track user interactions.
- Rate Limiting: Controlled using Upstash to ensure service stability.

## Technologies
- Next.js: Framework for building the application.
- typescript: Programming language for type safety.
- Vercel Postgres: Database management and dynamic content storage.
- Clerk: Authentication and user management.
- Uploadthing: Image upload functionality.
- Sentry: Error tracking and management.
- Posthog: Analytics to track user interactions and system performance.
- Upstash: Rate limiting to prevent abuse and manage load.
- Drizzle ORM: ORM tool for database interaction.
- Tailwind CSS: Styling and design framework.
- shadcn/ui: Additional UI components for enhanced interface design.

## TODO
 - [x] Make it deploy (w/ Vercel)
 - [x] Scaffold basic ui with mock data
 - [x] Tidy up build process
 - [x] Actually set up a database (/w Vercel Postgres)
 - [x] Attach database to ui
 - [x] Add authentication (w/ Clerk)
 - [x] Add image upload
 - [x] "taint" (server-only)
 - [x] use next/image component
 - [x] Error management (w/ Sentry)
 - [x] Routing/image page (parallel route)
 - [x] add shadui
 - [x] Analytics (w/ Posthog)
 - [x] Delete button (w/ Server Actions)
 - [x] Ratelimiting (w/ upstash)

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.