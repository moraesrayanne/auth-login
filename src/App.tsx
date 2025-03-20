import { Button } from './components'

export function App() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-full h-full">
        <img
          src="./src/assets/login.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col p-14">
        <div className="flex items-center gap-2">
          <img
            src="./src/assets/ui_unicorn.png"
            className="w-12 h-12 object-cover"
          />
          <span className="text-2xl">UI Unicorn</span>
        </div>
        <span className="text-2xl">Nice to see you again</span>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input className="border" name="password" />
          <label htmlFor="password">Senha</label>
          <input className="border" name="password" />
        </div>
        <div className="flex justify-between">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-black-900">
              Remember me
            </span>
          </label>

          <a href="#" target="_blank" rel="noopener noreferrer" className='text-blue-600'>
            Forgot password?
          </a>
        </div>

        <div>
          <Button>Sign In</Button>
        </div>
        
        <div className="border flex-row border-gray-200 m-4"></div>

        <div>
          <Button>Or sign in with Google</Button>
        </div>

        <div>
          <span>Don't have an account?
          <a href="#" className='text-blue-600 m-2' target="_blank" rel="noopener noreferrer">
            Sign up now
          </a>
          </span>
        </div>
      </div>
    </div>
  )
}
