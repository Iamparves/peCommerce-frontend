import { Link } from "react-router-dom";

const footerLinks = {
  information: [
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "My Account",
      link: "/account",
    },
    {
      title: "Order & Returns",
      link: "/order-returns",
    },
    {
      title: "FAQs",
      link: "/faqs",
    },
  ],
  quickShop: [
    {
      title: "New In",
      link: "/new-in",
    },
    {
      title: "Weekly Deals",
      link: "/weekly-deals",
    },
    {
      title: "On Sale",
      link: "/on-sale",
    },
    {
      title: "Top Rated",
      link: "/top-rated",
    },
    {
      title: "Best Sellers",
      link: "/best-sellers",
    },
  ],
  customerServices: [
    {
      title: "Shipping & Delivery",
      link: "/shipping-delivery",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      link: "/terms-conditions",
    },
    {
      title: "Return Policy",
      link: "/return-policy",
    },
  ],
};

const FooterQuickLinks = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-10 text-[#1f1f1f] sm:flex-row md:flex-nowrap lg:flex-wrap xl:justify-around">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase">Information</h3>
        <ul className="flex flex-col items-start gap-2.5">
          {footerLinks.information.map((link) => (
            <li key={link.title}>
              <Link
                className="group relative block py-[1px] text-sm"
                to={link.link}
              >
                {link.title}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase">Quick Shop</h3>
        <ul className="flex flex-col items-start gap-2.5">
          {footerLinks.quickShop.map((link) => (
            <li key={link.title}>
              <Link
                className="group relative block py-[1px] text-sm"
                to={link.link}
              >
                {link.title}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase">
          Customer Services
        </h3>
        <ul className="flex flex-col items-start gap-2.5">
          {footerLinks.customerServices.map((link) => (
            <li key={link.title}>
              <Link
                className="group relative block py-[1px] text-sm"
                to={link.link}
              >
                {link.title}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterQuickLinks;
