import OrderTrackForm from "@/components/OrderTracking/OrderTrackForm";
import SectionTop from "@/components/shared/SectionTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  return (
    <main>
      <SectionTop title="Order Tracking" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <h3 className="mb-2 text-xl font-semibold md:text-2xl lg:mb-4 lg:text-3xl">
                Order Tracking
              </h3>
              <p className="mb-3 text-[15px] text-[#666] md:text-base lg:mb-6">
                To track your order please enter your Order ID in the box below
                and press the "Track" button. This was given to you on your
                receipt and in the confirmation email you should have received.
              </p>
              <OrderTrackForm />
            </div>
            <div className="mx-10 hidden h-full w-[1px] bg-gray-200 md:block lg:mx-[60px]"></div>
            <div>
              <h3 className="mb-2 text-xl font-semibold md:text-2xl lg:mb-4 lg:text-3xl">
                Already have an account?
              </h3>
              <p className="mb-3.5 text-[15px] text-[#666] md:text-base lg:mb-6">
                Welcome back. Sign in to access your personalized experience,
                saved preferences, and more. We're thrilled to have you with us
                again!
              </p>
              <Button
                className="inline-block h-auto rounded-lg px-4 py-2.5 text-sm font-semibold uppercase duration-200 hover:bg-[#D2EF9A] hover:text-black md:px-5 md:py-3 lg:rounded-xl lg:px-10 lg:py-4"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderTracking;
