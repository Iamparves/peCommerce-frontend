import NavMainMenu from "./NavMainMenu";
import NavMenuTop from "./NavMenuTop";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <header>
      <TopNav />
      <NavMenuTop />
      <NavMainMenu />
    </header>
  );
};

export default Navbar;
