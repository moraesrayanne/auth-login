import { Button, Input } from '@/components'
import { Link } from '@/components/ui/Link'

const LogoHeader = () => (
  <section className="flex justify-center items-center gap-4">
    <img src="./src/assets/ui_unicorn.png" className="" alt="FinSafe logo" />
    <span className="text-2xl">FinSafe</span>
  </section>
)

const LoginFields = () => (
  <section className="flex flex-col gap-4">
    <Input placeholder="Email or phone number" />
    <Input placeholder="Enter password" type="password" />
  </section>
)

const LoginButton = () => (
  <section className="flex flex-col gap-6">
    <Button>Sign In</Button>
  </section>
)

const AuthActions = () => (
  <section className="flex justify-center" aria-labelledby="signup-label">
    <span>Don't have an account?</span>
    <Link href='#'>
      Sign up now
    </Link>
  </section>
)

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
