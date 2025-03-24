import { Input } from '@/components';

export const LoginFields = () => (
  <section className="flex flex-col gap-4">
    <Input placeholder="Email or phone number" />
    <Input placeholder="Enter password" type="password" />
  </section>
)
