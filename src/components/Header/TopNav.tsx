import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
  {
    icon: <FaPinterestP />,
    link: "https://pinterest.com",
  },
];

const TopNav = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("BDT");

  return (
    <div className="border-b border-white/10 bg-[#263587] py-2">
      <div className="container grid grid-cols-1 items-center gap-5 md:grid-cols-[auto_1fr_auto]">
        <div className="hidden items-center gap-6 md:flex">
          <Select defaultValue={language} onValueChange={setLanguage}>
            <SelectTrigger className="h-auto border-none bg-transparent px-0 py-2 text-xs text-white outline-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Bengali">Bengali</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue={currency} onValueChange={setCurrency}>
            <SelectTrigger className="h-auto border-none bg-transparent px-0 py-2 text-xs text-white outline-none">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BDT">BDT</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-center text-xs font-medium uppercase text-white sm:text-sm sm:font-semibold">
          New customers save 10% with the code GET10
        </p>
        <ul className="hidden space-x-4 md:flex">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                className="flex size-4 items-center justify-center text-base text-white duration-300 hover:text-[#D2EF9A]"
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
