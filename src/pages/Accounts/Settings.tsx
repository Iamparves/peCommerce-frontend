import CustomFormField from "@/components/shared/CustomFormField";
import CustomFormSelect from "@/components/shared/CustomFormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const profileSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().min(10, {
    message: "Phone number is required",
  }),
  gender: z.string().optional(),
  dob: z.string().optional(),
});

const Settings = () => {
  const form = useForm({
    resolver: zodResolver(profileSchema),
  });

  const handleProfileUpdate = (data: any) => {
    console.log(data);
  };

  return (
    <div className="rounded-xl border p-5 lg:p-6">
      <h3 className="mb-4 text-xl font-semibold md:text-2xl">Information</h3>
      <p className="mb-3 text-[#666]">Upload Avatar:</p>
      <div className="flex flex-wrap items-end gap-5">
        <div className="size-[120px] overflow-hidden rounded-md">
          <img
            src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Favatar%2F1.png&w=384&q=75"
            alt="Avatar"
            className="aspect-square w-full"
          />
        </div>
        <div>
          <h5 className="mb-1.5 text-[15px] font-semibold">Upload File:</h5>
          <p className="mb-3 text-sm text-[#666]">JPG 120x120px</p>
          <Input
            type="file"
            accept="image/*"
            className="w-full cursor-pointer"
          />
        </div>
      </div>
      <Form {...form}>
        <form
          className="mt-6"
          onSubmit={form.handleSubmit(handleProfileUpdate)}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <CustomFormField
              label="First Name"
              name="firstName"
              placeholder="First Name"
              formControl={form.control}
              className="py-3"
            />
            <CustomFormField
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              formControl={form.control}
              className="py-3"
            />
            <CustomFormField
              label="Email"
              name="email"
              placeholder="Email"
              formControl={form.control}
              className="py-3"
            />
            <CustomFormField
              label="Phone"
              name="phone"
              placeholder="Phone"
              formControl={form.control}
              className="py-3"
            />
            <CustomFormSelect
              label="Gender"
              name="gender"
              placeholder="Select Gender"
              formControl={form.control}
              options={["Male", "Female"]}
              className="py-3"
            />
            <CustomFormField
              label="Date of Birth"
              name="dob"
              placeholder="Date of Birth"
              formControl={form.control}
              inputType="date"
              className="py-3"
            />
          </div>
          <Button
            type="submit"
            className="mt-5 block h-auto rounded-xl px-4 py-3 text-sm font-semibold uppercase duration-200 hover:bg-[#D2EF9A] hover:text-black md:px-5 lg:px-10 lg:py-4"
          >
            Update Profile
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Settings;
