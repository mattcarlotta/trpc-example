import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const { data, error } = trpc.useQuery(["users"], {
    retry: 0,
  });

  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
