import AccountSidebar from "@/components/Accounts/AccountSidebar";
import SectionTop from "@/components/shared/SectionTop";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <main>
      <SectionTop title="My Account" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[auto_1fr] lg:gap-10 xl:gap-[60px]">
            <AccountSidebar />
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyAccount;
