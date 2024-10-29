import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "Adidas",
    logo: "/images/brands/adidas.png",
  },
  {
    name: "Apex",
    logo: "/images/brands/apex.png",
  },
  {
    name: "Casio",
    logo: "/images/brands/casio.png",
  },
  {
    name: "Easy",
    logo: "/images/brands/easy.png",
  },
  {
    name: "Lotto",
    logo: "/images/brands/lotto.png",
  },
  {
    name: "Louis Vuitton",
    logo: "/images/brands/louis-vuitton.png",
  },
  {
    name: "Nike",
    logo: "/images/brands/nike.png",
  },
  {
    name: "Realme",
    logo: "/images/brands/realme.png",
  },
  {
    name: "Sailor",
    logo: "/images/brands/sailor.png",
  },
  {
    name: "Samsung",
    logo: "/images/brands/samsung.png",
  },
  {
    name: "Vivo",
    logo: "/images/brands/vivo.png",
  },
  {
    name: "Walton",
    logo: "/images/brands/walton.png",
  },
  {
    name: "Zara",
    logo: "/images/brands/zara.png",
  },
];

const Brands = () => {
  return (
    <main>
      <SectionTop title="Brands" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                to={`/shop?brands=${brand.name.toLowerCase()}`}
                className="mx-auto block aspect-[3/2] w-full max-w-[240px] overflow-hidden rounded-md border bg-white p-6"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Brands;
