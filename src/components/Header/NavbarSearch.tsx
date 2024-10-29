import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NavbarSearch = () => {
  return (
    <div className="hidden max-w-[800px] flex-grow lg:flex">
      <Input
        className="h-auto rounded-none rounded-l-[5px] border-none px-4 py-2.5 text-[15px] placeholder:text-gray-400"
        placeholder="What are you looking for today?"
      />
      <Button className="h-auto rounded-none rounded-r-[5px] bg-[#db4444] px-5 font-semibold uppercase duration-300 hover:bg-[#D2EF9A] hover:text-black">
        Search
      </Button>
    </div>
  );
};

export default NavbarSearch;
