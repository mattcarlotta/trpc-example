import type { ReactNode } from 'react'

export default function ListItemTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold">{children}</h2>
}
