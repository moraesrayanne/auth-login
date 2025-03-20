import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children } = props

    return (
      <button
        {...props}
        ref={ref}
        role="button"
        className="bg-blue-600 text-white p-2 w-full font-bold rounded-md"
      >
        {children}
      </button>
    )
  }
)
