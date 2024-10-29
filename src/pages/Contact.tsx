import CustomFormField from "@/components/shared/CustomFormField";
import SectionTop from "@/components/shared/SectionTop";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleContact = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully");
  };

  return (
    <main>
      <SectionTop title="Contact" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto]">
            <div className="lg:max-w-[800px]">
              <h2 className="mb-1 text-2xl font-semibold sm:text-3xl lg:mb-2 lg:text-[34px]">
                Drop Us a Line
              </h2>
              <p className="text-[#848484] sm:text-lg">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <Form {...form}>
                <form
                  className="mt-6 space-y-4"
                  onSubmit={form.handleSubmit(handleContact)}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <CustomFormField
                      name="name"
                      placeholder="Your Name *"
                      formControl={form.control}
                      className="py-3"
                      disabled={false}
                    />
                    <CustomFormField
                      name="email"
                      placeholder="Your Email *"
                      formControl={form.control}
                      className="py-3"
                      disabled={false}
                    />
                  </div>
                  <CustomFormField
                    name="message"
                    placeholder="Your Message *"
                    formControl={form.control}
                    className="h-[100px] py-3"
                    disabled={false}
                    isTextArea
                  />
                  <div className="">
                    <button className="block rounded-lg bg-black px-4 py-3.5 text-sm font-semibold uppercase text-white duration-300 hover:bg-[#D2EF9A] hover:text-black md:px-7 md:py-4">
                      Send Message
                    </button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="space-y-6 md:space-y-8 lg:max-w-[340px]">
              <div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl lg:text-3xl">
                  Our Store
                </h3>
                <div className="space-y-2.5 text-[15px] text-[#555] sm:text-base">
                  <p>Bashundhara Residential Area, Dhaka, Bangladesh, 1229</p>
                  <p>Phone: +881790-862914</p>
                  <p>Email: poshcoderbd@gmail.com</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl lg:text-3xl">
                  Open Hours
                </h3>
                <div className="space-y-2.5 text-[15px] text-[#555] sm:text-base">
                  <p>Mon - Fri: 7:30 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
