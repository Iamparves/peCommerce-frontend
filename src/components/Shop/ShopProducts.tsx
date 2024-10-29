import useProducts from "@/hooks/useProducts";
import ProductCard from "../Products/ProductCard";

const ShopProducts = () => {
  const products = useProducts();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 pt-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;
