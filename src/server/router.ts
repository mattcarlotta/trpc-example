import * as trpc from '@trpc/server'
import { z } from 'zod'
import { Posts, Users } from './types'

export const appRouter = trpc
  .router()
  .query('users', {
    input: z.void(),
    output: Users,
    resolve: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!res.ok) {
        throw new trpc.TRPCError({
          message: 'Users not found',
          code: 'NOT_FOUND'
        })
      }

      return await res.json()
    }
  })
  .query('posts', {
    input: z.void(),
    output: Posts,
    resolve: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')

      if (!res.ok) {
        throw new trpc.TRPCError({
          message: 'Posts not found',
          code: 'NOT_FOUND'
        })
      }

      return await res.json()
    }
  })

export default appRouter

// export type definition of API
export type AppRouter = typeof appRouter
