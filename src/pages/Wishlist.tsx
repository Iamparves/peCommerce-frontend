import SectionTop from "@/components/shared/SectionTop";
import WishlistCard from "@/components/Wishlist/WishlistCard";

const wishlist = [
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

const Wishlist = () => {
  return (
    <main>
      <SectionTop title="Wishlist" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {wishlist.map((product) => (
              <WishlistCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
