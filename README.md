# Next.js + TRPC w/React-Query

Check this branch for a [SWR](https://github.com/mattcarlotta/trpc-example/tree/feat/use-swr) implementation.

This example shows how you can make a typed query using a minimal implementation of TRPC following [`this as a reference`](https://trpc.io/docs/nextjs).

## Setup

```bash
npm i
npm run dev
```

## Project Structure

```
┌── .next
├── node_modules
├── public
└── src
    ├── components
    ├── pages
    |   ├── api
    |   |   └── trpc
    |   |       └── [trpc].ts // trpc router endpoint
    |   |
    |   ├── _app.tsx
    |   └── index.tsx
    |
    ├── server
    |   ├── router.ts // trpc router w/routes
    |   └── types.ts // zod types used by trpc
    |
    ├── styles
    ├── index.html
    └── utils
        ├── getBaseUrl.ts // trpc url helper function
        ├── ssgHelper.ts // trpc server-side/staticprop helpers
        └── trpc.ts // client-side querying using trpc React-Query hooks
```
