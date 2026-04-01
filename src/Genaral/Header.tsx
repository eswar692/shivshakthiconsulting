import { MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { company_name, phone_number, whatsapp_number } from "./secrete";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-950 via-fuchsia-950 to-black border-b border-white/20">
      <div className="w-full md:w-[90%] mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

// const Title = () => (
//   <div className="flex flex-row w-full md:flex-row items-center justify-between gap-4">
//     <h5 className="montserrat font-semibold text-gray-200 text-center md:text-left text-sm md:text-base">
//       ✨ Any Problem? Connect with us
//     </h5>
//     <a
//       href={`tel://${phone_number}`}
//       className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-full shadow-xl transition-transform duration-300 hover:scale-105 montserrat text-sm"
//     >
//       Call Now
//     </a>
//   </div>
// );

const Logo = () => (
  <header className="w-full px-4 py-4 md:px-10 md:py-6">
    <div className="flex items-center justify-between">
      {/* Logo + Info */}
      <div className="flex items-start gap-4 md:gap-6">
        {/* Logo Image */}
        <div
          className="w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden 
          border border-yellow-400 shadow-lg"
        >
          <img
            src="https://i.pinimg.com/736x/7d/aa/03/7daa0365c9355bc4a08f35045bb7235e.jpg"
            alt="Company Logo"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h1
            className="montserrat font-extrabold text-2xl md:text-3xl 
            text-white tracking-wide"
          >
            {company_name}
          </h1>

          <p className="text-xs md:text-sm text-yellow-300 italic">
            Since 1978
          </p>

          {/* <p className="text-xl poppins md:text-sm text-gray-200 mt-2 leading-relaxed max-w-[360px]">
            <b>{address.line1}</b>
            <br />
            {address.line2}
            <br />
            {address.city}, {address.district}, {address.pincode}
            <br />
            {address.state}, {address.country}
            <br />
            <span className="text-yellow-400 font-semibold">
              📞 +91 {phone_number}
            </span>
          </p> */}
        </div>
      </div>

      {/* Menu */}
      <Menu />
    </div>
  </header>
);
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-8 font-medium text-gray-100 montserrat text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 border rounded bg-orange-500 transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative group cursor-pointer">
    <span className="transition-colors duration-300 group-hover:text-yellow-400">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div
      className="fixed inset-0 z-[9999]
      bg-gradient-to-b from-black via-purple-950 to-indigo-950
      px-6 py-8 flex flex-col"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          {company_name}
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition"
        >
          <X className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col gap-5 mt-8 text-white text-lg font-semibold">
        {["Home", "About", "Services", "Testimonials", "Contact"].map(
          (item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-xl hover:bg-white/10 hover:text-yellow-400 transition"
            >
              {item}
            </Link>
          ),
        )}
      </ul>

      {/* CTA Section */}
      <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
        <a
          href={`tel:${phone_number}`}
          className="flex items-center justify-center gap-2 w-full
          bg-yellow-400 text-black py-3 rounded-full font-bold
          hover:bg-yellow-500 transition"
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href={`https://wa.me/${whatsapp_number}`}
          className="flex items-center justify-center gap-2 w-full
          bg-green-500 text-white py-3 rounded-full font-bold
          hover:bg-green-600 transition"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

// const TextMarquee = () => (
//   <div
//     className="overflow-hidden
//  bg-gradient-to-l from-green-300 via-blue-300 to-orange-300

// "
//   >
//     <Marquee
//       speed={50}
//       className="whitespace-nowrap text-black  py-2 open-sans text-md md:text-base tracking-wide"
//     >
//       🌙 Facing issues like Love Breakup, Marriage Disputes, Relationship
//       Conflicts, or wanting to Get Your Love Back? 🔮 Consult for Vashikaran
//       solutions to attract your desired partner or resolve personal issues.
//       Contact a trusted Astrologer today.
//     </Marquee>
//   </div>
// );
