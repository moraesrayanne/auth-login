import { useState, forwardRef, InputHTMLAttributes } from 'react'
import { EyeOff, Eye } from 'lucide-react'
import { FieldError } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  type?: string
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, name, type = 'text', error, ...rest } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <div className="relative flex flex-col">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <input
          {...rest}
          ref={ref}
          name={name}
          type={isPasswordVisible ? 'text' : type}
          className="bg-input w-full p-3 rounded-sm border-transparent focus:outline-none focus:ring-0 border-2"
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {isPasswordVisible ? <EyeOff absoluteStrokeWidth /> : <Eye absoluteStrokeWidth height={24} width={24} />}
          </button>
        )}
      </div>

      <p className="text-red-500 text-[12px] mt-1">{error?.message}</p>
    </div>
  )
})
