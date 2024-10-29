import { Input } from "../ui/input";

const CartCheckout = () => {
  return (
    <div className="mt-8 flex flex-col items-start gap-x-8 gap-y-4 md:flex-row">
      <div className="flex w-full">
        <Input
          className="h-auto w-full rounded-none border-r-0 px-5 py-4 text-base placeholder:text-gray-400 sm:min-w-[200px] md:max-w-[260px]"
          placeholder="Enter coupon code..."
        />
        <button className="block bg-[#1f1f1f] px-7 font-semibold text-white duration-300 hover:bg-[#FF2F2F] sm:text-nowrap md:text-wrap lg:text-nowrap">
          Apply coupon
        </button>
      </div>
      <div className="w-full md:max-w-[480px]">
        <div className="bg-[#f2f2f2] px-5 py-3.5">
          <h3 className="text-lg font-semibold">Cart Totals</h3>
        </div>
        <div className="flex justify-between gap-10 border-b px-5 py-3.5">
          <h4 className="font-semibold">Subtotal:</h4>
          <p className="font-medium text-[#848484]">$150</p>
        </div>
        <div className="flex justify-between gap-10 px-5 py-3.5">
          <h4 className="font-semibold">Order Total:</h4>
          <p className="font-medium text-[#1f1f1f]">$150</p>
        </div>
        <button className="block w-full bg-[#1f1f1f] py-[18px] font-semibold text-white duration-300 hover:bg-[#FF2F2F]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
