import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, variant = 'primary' } = props

    const variants = {
      primary: 'bg-blue-600 text-white p-2 w-full font-bold rounded-md hover:bg-blue-500 cursor-pointer active:bg-blue-700',
      secondary: 'bg-zinc-900 text-white p-2 w-full font-bold rounded-md hover:bg-zinc-500 cursor-pointer active:bg-zinc-700'
    }

    return (
      <button
        {...props}
        ref={ref}
        role="button"
        className={variants[variant]}
      >
        {children}
      </button>
    )
  }
)
