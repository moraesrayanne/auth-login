import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().email("Invalid email").min(5, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return { register, handleSubmit, errors, isSubmitting };
};