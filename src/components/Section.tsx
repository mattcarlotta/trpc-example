import type { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
  return <section className="flex flex-col space-y-4 p-4">{children}</section>
}
