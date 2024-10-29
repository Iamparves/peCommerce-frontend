import CartCheckout from "@/components/Cart/CartCheckout";
import CartItem from "@/components/Cart/CartItem";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Realinn Under Sink Organizer and Storage for Kitchen",
    price: 30,
    stock: 10,
    image: "/images/top-rated/product-3.jpg",
  },
  {
    id: 3,
    name: "Sony Noise Canceling Wireless Headphone",
    price: 65.14,
    stock: 15,
    image: "/images/top-rated/product-7.jpg",
  },
  {
    id: 4,
    name: "White Ceramic Vases - 3 Small Ribbed Vase for Flowers",
    price: 25,
    stock: 0,
    image: "/images/top-rated/product-1.jpg",
  },
];

const Cart = () => {
  return (
    <main>
      <SectionTop title="Cart" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <h3 className="mb-2.5 text-xl font-semibold text-[#222]">
            Your Cart items
          </h3>
          <div className="border">
            <div className="hidden grid-cols-[auto_1fr_auto_auto_auto_auto] gap-10 border-b bg-[#f7f7f7] px-5 py-4 text-center text-[17px] font-semibold lg:grid">
              <h5 className="w-[100px]">Image</h5>
              <h5>Product Name</h5>
              <h5 className="w-[120px]">Unit Price</h5>
              <h5 className="w-32">Qty</h5>
              <h5 className="w-32">Subtotal</h5>
              <h5 className="w-20">Action</h5>
            </div>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/shop"
              className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-[#FF2F2F] hover:text-white"
            >
              Continue Shopping
            </Link>
            <button className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-[#FF2F2F] hover:text-white sm:ml-auto">
              Update Cart
            </button>
            <button className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-[#FF2F2F] hover:text-white">
              Clear Cart
            </button>
          </div>
          <CartCheckout />
        </div>
      </section>
    </main>
  );
};

export default Cart;
