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

const signupSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters",
  }),
});

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: any) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log(data);
    toast.success("Account created successfully");
  };

  return (
    <main>
      <SectionTop title="Sign Up" />
      <AuthWrapper>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <CustomFormField
              label="Name"
              name="name"
              placeholder="Enter your full name"
              formControl={form.control}
              className="h-auto py-3.5 transition-colors duration-300 focus:border-[#FF2F2F] md:px-5"
            />
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
            <CustomFormField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              inputType="password"
              formControl={form.control}
              className="h-auto py-3.5 transition-colors duration-300 focus:border-[#FF2F2F] md:px-5"
            />
            <Button
              type="submit"
              className="h-auto w-full bg-[#263587] py-4 text-[15px] font-medium duration-300 hover:bg-[#222]"
            >
              Sign Up
            </Button>
          </form>
        </Form>
        <div className="mt-5">
          <p className="text-center text-[15px] text-[#6c6966]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#FF2F2F] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </AuthWrapper>
    </main>
  );
};

export default Signup;
