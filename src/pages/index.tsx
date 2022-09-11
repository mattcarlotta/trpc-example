import { InferGetServerSidePropsType } from 'next'
import List from '../components/List'
import ListItem from '../components/ListItem'
import ListItemTitle from '../components/ListItemTitle'
import Section from '../components/Section'
import Title from '../components/Title'
import { ssg } from '../utils/ssgHelper'
import { trpc } from '../utils/trpc'

export default function IndexPage({
  posts,
  serverError
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data, error: usersError, isLoading } = trpc.useQuery(['users'])

  return (
    <main className="max-w-screen-xl mx-auto">
      <Section>
        <Title>Client:</Title>
        <List>
          {usersError || (!isLoading && !data) ? (
            <ListItem className="text-red-500">
              {usersError?.message || 'Unable to retrieve users'}
            </ListItem>
          ) : isLoading ? (
            Array.from({ length: 10 }, (_v, i) => (
              <ListItem key={i} className="h-8 bg-gray-300 animate-pulse" />
            ))
          ) : (
            data?.map((user) => (
              <ListItem key={user.id}>
                <ListItemTitle>{user.name}</ListItemTitle>
              </ListItem>
            ))
          )}
        </List>
      </Section>
      <Section>
        <Title>Server:</Title>
        <List>
          {serverError || !posts ? (
            <ListItem className="text-red-500">
              {serverError || 'Unable to retrieve posts'}
            </ListItem>
          ) : (
            posts.map((post) => (
              <ListItem key={post.id} className="space-y-2">
                <ListItemTitle>{post.title}</ListItemTitle>
                <h3 className="text-lg font-bold">{post.body}</h3>
              </ListItem>
            ))
          )}
        </List>
      </Section>
    </main>
  )
}

export async function getServerSideProps() {
  const trpcState = ssg.dehydrate()
  try {
    const posts = await ssg.fetchQuery('posts')

    return {
      props: {
        trpcState,
        posts,
        serverError: ''
      }
    }
  } catch (error: any) {
    return {
      props: {
        trpcState,
        posts: null,
        serverError: String(error?.message)
      }
    }
  }
}
