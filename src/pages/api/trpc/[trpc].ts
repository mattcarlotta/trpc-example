import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

const User = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    address: z.object({
      street: z.string(),
      suite: z.string(),
      city: z.string(),
      zipcode: z.string(),
      geo: z.object({
        lat: z.string(),
        lng: z.string(),
      }),
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
      name: z.string(),
      catchPhrase: z.string(),
      bs: z.string(),
    }),
  })
);

export const appRouter = trpc.router().query("users", {
  input: z.void(),
  output: User,
  resolve: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new trpc.TRPCError({
        message: "Users not found",
        code: "NOT_FOUND",
      });
    }

    const data: z.TypeOf<typeof User> = await res.json();

    return data;
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
