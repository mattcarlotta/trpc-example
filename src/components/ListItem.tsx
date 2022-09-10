import type { ReactNode } from 'react'

export default function ListItem({
  children,
  className
}: {
  children?: ReactNode
  className?: string
}) {
  return <li className={className}>{children}</li>
}
