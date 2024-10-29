import SectionTop from "@/components/shared/SectionTop";
import ShopProducts from "@/components/Shop/ShopProducts";
import ShopSidebar from "@/components/Shop/ShopSidebar";
import ShopTopbar from "@/components/Shop/ShopTopbar";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

const Shop = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <main>
      <SectionTop title="Shop" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
            <ShopSidebar
              openFilter={openFilter}
              handleCloseFilter={handleCloseFilter}
            />
            <div>
              <ShopTopbar handleOpenFilter={handleOpenFilter} />
              <ShopProducts />
              <div className="mx-auto mt-9 grid w-[270px] grid-cols-[auto_auto_1fr_auto_auto] divide-x divide-[#141f5e] text-white">
                <button
                  disabled={true}
                  className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
                >
                  <ChevronsLeft className="w-full" />
                </button>
                <button
                  disabled={true}
                  className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
                >
                  <ChevronLeft className="w-full" />
                </button>
                <p className="pointer-events-none flex items-center justify-center bg-[#263587] text-lg font-semibold">
                  1 / 1
                </p>
                <button
                  disabled={true}
                  className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
                >
                  <ChevronRight className="w-full" />
                </button>
                <button
                  disabled={true}
                  className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
                >
                  <ChevronsRight className="w-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
