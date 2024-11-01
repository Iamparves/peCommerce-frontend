import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Please enter your current password",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmNewPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const Security = () => {
  const form = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const handleChangePassword = (data: any) => {
    console.log(data);
  };

  return (
    <div className="rounded-xl border p-5 lg:p-6">
      <h3 className="mb-4 text-xl font-semibold md:text-2xl">
        Change Password
      </h3>
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleChangePassword)}
        >
          <CustomFormField
            label="Current password"
            name="currentPassword"
            placeholder="Enter your current password"
            inputType="password"
            formControl={form.control}
            className="py-3"
          />
          <CustomFormField
            label="New password"
            name="newPassword"
            placeholder="Enter your new password"
            inputType="password"
            formControl={form.control}
            className="py-3"
          />
          <CustomFormField
            label="Confirm new password"
            name="confirmNewPassword"
            placeholder="Enter your new password again"
            inputType="password"
            formControl={form.control}
            className="py-3"
          />
          <div className="pt-2">
            <Button
              type="submit"
              className="block h-auto rounded-xl px-4 py-3 text-sm font-semibold uppercase duration-200 hover:bg-[#D2EF9A] hover:text-black md:px-5 lg:px-10 lg:py-4"
            >
              Update Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Security;
