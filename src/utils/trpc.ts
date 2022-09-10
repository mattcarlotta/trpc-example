import { createSWRHooks } from "trpc-swr";
import type { AppRouter } from "../pages/api/trpc/[trpc]";

export const trpc = createSWRHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
