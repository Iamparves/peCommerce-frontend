import { NavLink } from "react-router-dom";

const menuList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Brands",
    link: "/brands",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const NavMenuList = () => {
  return (
    <div className="flex flex-col flex-wrap items-start gap-4 lg:flex-row lg:items-center lg:gap-6">
      {menuList.map((menu) => (
        <NavLink
          key={menu.title}
          to={menu.link}
          className="group relative py-0.5 font-semibold lg:text-sm lg:uppercase"
        >
          {menu.title}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black duration-300 group-hover:w-full group-[&.active]:w-full"></div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenuList;
