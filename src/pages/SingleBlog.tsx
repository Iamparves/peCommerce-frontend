import BlogCommentForm from "@/components/Blog/BlogCommentForm";
import { format } from "date-fns";
import { Minus } from "lucide-react";

const SingleBlog = () => {
  return (
    <main>
      <section className="bg-white py-16 md:pt-20">
        <div className="container">
          <div
            style={{
              backgroundImage:
                "url(https://azim.commonsupport.com/Castro/assets/images/news/blog-details-1.jpg)",
            }}
            className="bg-cover bg-center bg-no-repeat"
          >
            <div className="flex aspect-[5/3] max-h-[710px] min-h-[240px] min-w-full max-w-full flex-col justify-end bg-gradient-to-t from-black/50 via-black/20 to-black/10 p-5 md:p-8">
              <h1 className="mx-auto max-w-[600px] text-center text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[32px] md:leading-tight lg:text-4xl lg:leading-tight xl:max-w-[700px]">
                How to Style Your Wardrobe for Every Season
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16">
        <div className="container">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-7 flex flex-wrap gap-2.5 text-[15px] text-[#848484]">
              <p className="text-[#1f1f1f]">
                {format(new Date(), "MMMM dd, yyyy")}
              </p>
              <p>|</p>
              <p>by admin</p>
            </div>
            <div className="blog-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <h3>The biebers just switched up their couple style.</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.consectetur.
              </p>
              <h3>Why is a ticket to lagos so expensive?</h3>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamo laboris nisi ut aliquip ex ea commodo consequat. duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium dolore que laudantium
                totam rem aperiam eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                fugit sed quia consequuntur magni dolore eos qui ratione
                voluptatem sequi nesciunt. Neque poro quisquam est, qui dolore
                ipsum quia dolor sit amet.consectetur adipisci velit, sed quia
                non numquam eius modi tempora.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-5xl border-b pb-16 pt-12">
            <h4 className="mb-3 text-xl font-semibold">Tags:</h4>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2">
              {["Fashion", "Lifestyle", "Travel"].map((tag, index) => (
                <p
                  className="border px-3 py-2 text-sm font-medium text-gray-600"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16 md:pb-20">
        <div className="container">
          <div className="mx-auto w-full max-w-5xl">
            <h3 className="mb-8 text-2xl font-semibold text-[#1f1f1f]">
              3 Comments
            </h3>
            {[...Array(3)].map((_, index) => (
              <div
                className="mb-7 grid grid-cols-[auto_1fr] gap-4 border-b pb-7 last:border-b-0 sm:gap-7"
                key={index}
              >
                <img
                  src={
                    "https://azim.commonsupport.com/Castro/assets/images/news/comment-1.png"
                  }
                  alt="Eileen Alene"
                  className="block size-[75px] rounded-full object-cover sm:size-20"
                />
                <div>
                  <h4 className="mb-4">
                    <span className="inline-block font-semibold text-[#222]">
                      Eileen Alene
                    </span>
                    <Minus
                      className="mx-1.5 inline-block text-[#848484]"
                      size={10}
                    />
                    <span className="inline-block text-sm text-[#848484]">
                      {format(new Date(), "MMM dd, yyyy")}
                    </span>
                  </h4>
                  <p className="text-[#848484]">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim est laborum. Sed
                    perspiciatis unde omnis natus error sit voluptatem.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <BlogCommentForm />
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
