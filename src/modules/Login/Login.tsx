import { Button, Input } from '@/components'
import { Link } from '@/components/ui/Link'

const Title = () => (
  <section className="flex justify-center items-center gap-4">
    <img src="./src/assets/ui_unicorn.png" className="" />
    <span className="text-2xl">FinSafe</span>
  </section>
)

const InputForm = () => (
  <section className="flex flex-col gap-4">
    <Input placeholder="Email or phone number" />
    <Input placeholder="Enter password" type="password" />
  </section>
)

const ButtonArea = () => (
  <section className="flex flex-col gap-6">
    <Button>Sign In</Button>
  </section>
)

const Subscription = () => (
  <section className="flex justify-center">
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
        <Title />
        <InputForm />
        <ButtonArea />
        <Subscription />
      </div>
    </main>
  )
}
