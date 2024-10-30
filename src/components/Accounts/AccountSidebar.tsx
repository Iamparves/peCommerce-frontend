import { House, LogOut, Package, Settings, Tag } from "lucide-react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: <House className="size-full" />,
    link: "/account/dashboard",
  },
  {
    title: "Orders",
    icon: <Package className="size-full" />,
    link: "/account/orders",
  },
  {
    title: "Addresses",
    icon: <Tag className="size-full" />,
    link: "/account/addresses",
  },

  {
    title: "Settings",
    icon: <Settings className="size-full" />,
    link: "/account/settings",
  },
  {
    title: "Logout",
    icon: <LogOut className="size-full" />,
    link: "/account/logout",
  },
];

const AccountSidebar = () => {
  return (
    <div className="w-full rounded-xl bg-[#F7F7F7] p-3 md:w-[230px] lg:w-[300px] lg:p-7 xl:w-[380px] xl:p-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <img
          src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Favatar%2F1.png&w=384&q=75"
          alt="Avatar"
          className="mb-4 block size-[140px] rounded-full object-cover"
        />
        <h3 className="mb-1 text-lg font-semibold lg:text-xl">Hotaro Oreki</h3>
        <p className="text-[#666] lg:text-lg">hotaro.oreki@gmail.com</p>
      </div>
      <div className="flex flex-col gap-1">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="flex items-center gap-3 rounded-lg px-5 py-3 font-semibold duration-200 hover:bg-white lg:py-4 lg:text-lg [&.active]:bg-white"
          >
            <span className="size-[18px] lg:size-5">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;
