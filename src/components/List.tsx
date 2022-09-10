import type { ReactNode } from 'react'

export default function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-4 pl-8">{children}</ul>
}
