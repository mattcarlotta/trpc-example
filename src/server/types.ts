import { z } from 'zod'

export const Users = z
  .array(
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
          lng: z.string()
        })
      }),
      phone: z.string(),
      website: z.string(),
      company: z.object({
        name: z.string(),
        catchPhrase: z.string(),
        bs: z.string()
      })
    })
  )
  .nullable()

export type UsersType = z.TypeOf<typeof Users>

export const Posts = z
  .array(
    z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      body: z.string()
    })
  )
  .nullable()

export type PostsType = z.TypeOf<typeof Posts>
