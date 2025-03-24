import { LogoHeader, LoginFields, LoginButton, AuthActions } from '@/modules/Login/components'

export const Login: React.FC = () => {
  return (
    <main className="flex flex-col p-4 h-svh justify-center md:items-center">
      <div className='flex flex-col gap-6 md:w-[600px]'>
        <LogoHeader />
        <LoginFields />
        <LoginButton />
        <AuthActions />
      </div>
    </main>
  )
}
