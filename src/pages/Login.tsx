import AuthWrapper from "@/components/Auth/AuthWrapper";
import CustomFormField from "@/components/shared/CustomFormField";
import SectionTop from "@/components/shared/SectionTop";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: any) => {
    console.log(data);
    toast.success("Logged in successfully");
  };

  return (
    <main>
      <SectionTop title="Log In" />
      <AuthWrapper>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <CustomFormField
              label="Email"
              name="email"
              placeholder="Enter your email address"
              formControl={form.control}
              className="h-auto py-3.5 transition-colors duration-300 focus:border-[#FF2F2F] md:px-5"
            />
            <CustomFormField
              label="Password"
              name="password"
              placeholder="Enter your password"
              inputType="password"
              formControl={form.control}
              className="h-auto py-3.5 transition-colors duration-300 focus:border-[#FF2F2F] md:px-5"
            />
            <Button
              type="submit"
              className="h-auto w-full bg-[#263587] py-4 text-[15px] font-medium duration-300 hover:bg-[#222]"
            >
              Log In
            </Button>
          </form>
        </Form>
        <div className="mt-5">
          <p className="text-center text-[15px] text-[#6c6966]">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#FF2F2F] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </AuthWrapper>
    </main>
  );
};

export default Login;
