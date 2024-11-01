import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "s184989823",
    status: "delivery",
    products: [
      {
        id: "1",
        name: "Contrasting sheepskin sweatshirt",
        size: "XL",
        color: "Yellow",
        quantity: 1,
        price: 45.0,
        image:
          "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fproduct%2Ffashion%2F1-1.png&w=1080&q=75",
      },
      {
        id: "2",
        name: "Contrasting sheepskin sweatshirt",
        size: "XL",
        color: "White",
        quantity: 1,
        price: 70.0,
        image:
          "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fproduct%2Ffashion%2F2-1.png&w=1080&q=75",
      },
    ],
  },
  {
    id: "s184989824",
    status: "completed",
    products: [
      {
        id: "1",
        name: "Contrasting sheepskin sweatshirt",
        size: "L",
        color: "White",
        quantity: 1,
        price: 32.0,
        image:
          "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fproduct%2Ffashion%2F4-1.png&w=1080&q=75",
      },
    ],
  },
];

const Orders = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_openDetail, setOpenDetail] = useState(false);
  const [activeOrders, setActiveOrders] = useState<string | undefined>("all");

  const handleActiveOrders = (order: string) => {
    setActiveOrders(order);
  };

  return (
    <div className="rounded-xl border p-5 lg:p-6">
      <h6 className="text-xl font-semibold">Your Orders</h6>
      <div className="w-full overflow-x-auto">
        <div className="mt-3 grid grid-cols-5 border-b max-lg:w-[500px]">
          {["all", "pending", "delivery", "completed", "canceled"].map(
            (item, index) => (
              <button
                key={index}
                className={cn(
                  "relative border-b-2 px-3 py-2.5 text-center font-semibold capitalize text-[#666] duration-300 hover:text-black",
                  activeOrders === item
                    ? "border-black text-black"
                    : "border-transparent",
                )}
                onClick={() => handleActiveOrders(item)}
              >
                <span className="relative z-[1]">{item}</span>
              </button>
            ),
          )}
        </div>
      </div>
      <div>
        {orders.map((order, index) => (
          <div
            key={`order-${index}`}
            className="mt-5 rounded-lg border shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b p-5">
              <div className="flex items-center gap-2">
                <strong className="text-sm font-medium capitalize md:text-base">
                  Order Number:
                </strong>
                <strong className="text-sm font-semibold uppercase md:text-base">
                  {order.id}
                </strong>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-sm font-medium capitalize md:text-base">
                  Order status:
                </strong>
                <span
                  className={cn(
                    "rounded-full bg-[#8684D4]/10 px-4 py-1.5 text-[13px] font-semibold capitalize text-[#8684D4] md:text-sm",
                    order.status === "completed" &&
                      "bg-[#3dab25]/10 text-[#3dab25]",
                  )}
                >
                  {order.status}
                </span>
              </div>
            </div>
            <div className="px-5">
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center justify-between gap-3 border-b py-5"
                >
                  <Link
                    to={"/product/default"}
                    className="flex items-center gap-5"
                  >
                    <div className="aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg md:w-[100px]">
                      <img
                        src={product.image}
                        alt={"Contrasting sheepskin sweatshirt"}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium capitalize md:text-base">
                        {product.name}
                      </div>
                      <div className="mt-2 text-[13px] text-[#666] md:text-sm lg:text-base">
                        <span className="uppercase">{product.size}</span>
                        <span>/</span>
                        <span className="capitalize">{product.color}</span>
                      </div>
                    </div>
                  </Link>
                  <div className="text-sm font-medium capitalize md:text-base">
                    <span className="">{product.quantity}</span>
                    <span> X </span>
                    <span className="">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 p-5">
              <Button
                onClick={() => setOpenDetail(true)}
                className="block h-auto rounded-xl border border-black px-4 py-3 text-sm font-semibold uppercase duration-200 hover:border-[#D2EF9A] hover:bg-[#D2EF9A] hover:text-black md:px-5 lg:px-10 lg:py-4"
              >
                Order Details
              </Button>
              <Button className="block h-auto rounded-xl border bg-[#f7f7f7] px-4 py-3 text-sm font-semibold uppercase text-black duration-200 hover:border-black hover:bg-black hover:text-white md:px-5 lg:px-10 lg:py-4">
                Cancel Order
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
