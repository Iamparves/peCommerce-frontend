import CategoryCard from "@/components/Category/CategoryCard";
import SectionTop from "@/components/shared/SectionTop";

const categories = [
  {
    title: "Electronics & Gadgets",
    path: "/categories/electronics",
    featuredImage: "/images/categories/cat-1.jpg",
    productCount: 20,
  },
  {
    title: "Fashion & Apparel",
    path: "/categories/fashion",
    featuredImage: "/images/categories/cat-2.jpg",
    productCount: 30,
  },
  {
    title: "Home & Kitchen",
    path: "/categories/home-kitchen",
    featuredImage: "/images/categories/cat-3.jpg",
    productCount: 15,
  },
  {
    title: "Health & Beauty",
    path: "/categories/health-beauty",
    featuredImage: "/images/categories/cat-4.jpg",
    productCount: 10,
  },
  {
    title: "Sports & Outdoors",
    path: "/categories/sports-outdoors",
    featuredImage: "/images/categories/cat-5.jpg",
    productCount: 25,
  },
  {
    title: "Toys & Hobbies",
    path: "/categories/toys-hobbies",
    featuredImage: "/images/categories/cat-6.jpg",
    productCount: 22,
  },
  {
    title: "Grocery & Essentials",
    path: "/categories/grocery",
    featuredImage: "/images/categories/cat-7.jpg",
    productCount: 18,
  },
  {
    title: "Automotive & Motorcycles",
    path: "/categories/automotive",
    featuredImage: "/images/categories/cat-8.jpg",
    productCount: 12,
  },
  {
    title: "Books & Stationery",
    path: "/categories/books-stationery",
    featuredImage: "/images/categories/cat-9.jpg",
    productCount: 40,
  },
  {
    title: "Pets & Supplies",
    path: "/categories/pets-supplies",
    featuredImage: "/images/categories/cat-10.jpg",
    productCount: 8,
  },
  {
    title: "Office & Professional",
    path: "/categories/office-professional",
    featuredImage: "/images/categories/cat-11.jpg",
    productCount: 14,
  },
  {
    title: "Baby & Kids",
    path: "/categories/baby-kids",
    featuredImage: "/images/categories/cat-12.jpg",
    productCount: 27,
  },
];

const Categories = () => {
  return (
    <main>
      <SectionTop title="Categories" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] lg:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
