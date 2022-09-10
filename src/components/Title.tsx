import type { ReactNode } from 'react'

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl font-bold bg-black text-white pl-4">{children}</h1>
  )
}
