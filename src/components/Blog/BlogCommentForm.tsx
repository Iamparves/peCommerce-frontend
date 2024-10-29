import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomFormField from "../shared/CustomFormField";
import { Form } from "../ui/form";

const commentSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  comment: z.string().min(1, {
    message: "Comment is required",
  }),
});

const BlogCommentForm = () => {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const handleComment = (data: any) => {
    console.log(data);
    toast.success("Comment added successfully");
  };

  return (
    <div className="mx-auto w-full max-w-5xl border-t pt-14">
      <h3 className="mb-8 text-2xl font-semibold text-[#1f1f1f]">
        Leave A Comment
      </h3>

      <Form {...form}>
        <form
          className="mt-6 space-y-4"
          onSubmit={form.handleSubmit(handleComment)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CustomFormField
              name="name"
              placeholder="Name"
              formControl={form.control}
              className="rounded-none py-3"
              disabled={false}
            />
            <CustomFormField
              name="email"
              placeholder="Email"
              formControl={form.control}
              className="rounded-none py-3"
              disabled={false}
            />
          </div>
          <CustomFormField
            name="comment"
            placeholder="Comment"
            formControl={form.control}
            className="h-[160px] rounded-none py-3"
            disabled={false}
            isTextArea
          />
          <div className="">
            <button className="block bg-black px-4 py-3.5 font-semibold text-white duration-300 hover:bg-[#D2EF9A] hover:text-black md:px-7 md:py-4">
              Submit Comment
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BlogCommentForm;
