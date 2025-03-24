import { ReactNode } from 'react'

interface LinkProps {
  children: ReactNode
  href: string
}

export const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <a {...props} href={href} className="text-link ml-2 cursor-pointer">
      {children}
    </a>
  )
}
