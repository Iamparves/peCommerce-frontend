import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomFormField from "../shared/CustomFormField";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const trackOrderSchema = z.object({
  orderId: z.string().min(1, {
    message: "Order ID is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
});

const OrderTrackForm = () => {
  const form = useForm({
    resolver: zodResolver(trackOrderSchema),
    defaultValues: {
      orderId: "",
      email: "",
    },
  });

  const handleOrderTracking = (data: any) => {
    console.log(data);

    toast.success("Order tracking is in progress");
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(handleOrderTracking)}
      >
        <CustomFormField
          label="Order ID"
          name="orderId"
          placeholder="Enter your Order ID"
          formControl={form.control}
          className="h-auto py-3"
        />
        <CustomFormField
          label="Email"
          name="email"
          placeholder="Enter your billing email"
          formControl={form.control}
          className="h-auto py-3"
        />
        <div className="pt-1 lg:pt-4">
          <Button className="inline-block h-auto rounded-lg px-4 py-2.5 text-sm font-semibold uppercase duration-200 hover:bg-[#D2EF9A] hover:text-black md:px-5 md:py-3 lg:rounded-xl lg:px-10 lg:py-4">
            Track Order
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderTrackForm;
