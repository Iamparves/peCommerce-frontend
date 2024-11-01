import CustomFormField from "@/components/shared/CustomFormField";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AddressFormProps {
  address?: any;
  addressType: "billing" | "shipping";
  sameAddress: boolean;
  setSameAddress: (value: boolean) => void;
}

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  companyName: z.string().optional(),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  streetAddress: z.string().min(1, {
    message: "Street address is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  state: z.string().min(1, {
    message: "State is required",
  }),
  zipCode: z.string().min(1, {
    message: "Zip code is required",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
});

const AddressForm: React.FC<AddressFormProps> = ({ address, addressType }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...address,
    },
  });

  const handleAddressUpdate = (data: any) => {
    console.log(data);
  };

  return (
    <AccordionItem className="border-b-0" value={addressType}>
      <AccordionTrigger className="border-b pb-1 text-left text-lg font-semibold capitalize hover:no-underline lg:text-xl">
        {addressType} Address
      </AccordionTrigger>
      <AccordionContent>
        <Form {...form}>
          <form
            className="pt-5"
            onSubmit={form.handleSubmit(handleAddressUpdate)}
          >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 lg:grid-cols-2">
              <CustomFormField
                label="First Name"
                name="firstName"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Last Name"
                name="lastName"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Company Name (optional)"
                name="companyName"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Country / Region"
                name="country"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Street Address"
                name="streetAddress"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="City / Town"
                name="city"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />

              <CustomFormField
                label="State / Province"
                name="state"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Zip Code"
                name="zipCode"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Phone"
                name="phone"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
              <CustomFormField
                label="Email"
                name="email"
                placeholder=""
                formControl={form.control}
                className="transition-colors duration-300 focus:border-black"
              />
            </div>
            <Button
              type="submit"
              className="mt-5 block h-auto rounded-xl px-4 py-3 text-sm font-semibold uppercase duration-200 hover:bg-[#D2EF9A] hover:text-black md:px-5 lg:px-10 lg:py-4"
            >
              Update Address
            </Button>
          </form>
        </Form>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AddressForm;
