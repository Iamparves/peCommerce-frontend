import FooterNewsletter from "./FooterNewsletter";
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7]">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto]">
          <div className="min-w-[280px] max-w-lg text-[#1f1f1f] md:col-span-2 lg:col-span-1 lg:max-w-xs">
            <h2 className="mb-4 text-2xl font-bold">Posh Coder</h2>
            <div className="mb-4 grid grid-cols-[auto_1fr] gap-4">
              <p className="w-[65px] font-semibold">Mail:</p>
              <p>poshcoderbd@gmail.com</p>
            </div>
            <div className="mb-4 grid grid-cols-[auto_1fr] gap-4">
              <p className="w-[65px] font-semibold">Phone:</p>
              <p>+881790-862914</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <p className="font-semibold lg:w-[65px]">Address:</p>
              <p>Bashundhara Residential Area, Dhaka, Bangladesh, 1229</p>
            </div>
          </div>
          <FooterQuickLinks />
          <FooterNewsletter />
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t py-3 sm:flex-row">
          <p className="text-sm text-[#696c70]">
            &copy;{new Date().getFullYear()} Posh Coder. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#696c70]">Payment:</p>
            <img
              src="/images/payments/bKash.png"
              alt="bKash"
              className="h-6 rounded-sm bg-white"
            />
            <img src="/images/payments/visa.webp" alt="Visa" className="h-6" />
            <img
              src="/images/payments/mastercard.webp"
              alt="Mastercard"
              className="h-6"
            />
            <img src="/images/payments/amex.webp" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
