import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'outline'
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      role="button"
      {...props}
      className="bg-blue-600 text-white p-2 w-full font-bold rounded-md"
    >
      {children}
    </button>
  )
}
