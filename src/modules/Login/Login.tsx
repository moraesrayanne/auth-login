import { LogoHeader, AuthActions } from '@/modules/Login/components'
import { useLoginForm } from '@/modules/Login/hooks/useLoginForm'
import { Button, Input } from '@/components'

export const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useLoginForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <main className="flex flex-col p-4 h-svh justify-center md:items-center">
      <div className="flex flex-col gap-6 md:w-[600px]">
        <LogoHeader />
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <section className="flex flex-col gap-4">
            <Input placeholder="Enter email" {...register('username')} error={errors.username} />
            <Input placeholder="Enter password" type="password" {...register('password')} error={errors.password} />
          </section>
          <section className="flex flex-col gap-6">
            <Button type="submit">Sign In</Button>
          </section>
        </form>
        <AuthActions />
      </div>
    </main>
  )
}
