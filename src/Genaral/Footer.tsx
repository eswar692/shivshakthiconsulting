import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Love Expert",
    "Love Problem Expert",
    "Love Marriage Approval",
    "Quick Rishta Marriage",
  ];

  return (
    <motion.footer
      className="roboto relative mt-2 w-full overflow-hidden text-white
  bg-gradient-to-br from-fuchsia-800 via-purple-900 to-indigo-950 pt-20 z-[9999]"
    >
      {/* Strong Color Blobs */}
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-pink-600 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/4 -right-32 w-[520px] h-[520px] bg-indigo-700 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-yellow-500 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* ABOUT */}
        <div className="rounded-3xl p-6 bg-purple-950 border border-white/20">
          <h2 className="text-2xl font-extrabold montserrat text-white mb-3">
            About {company_name}
          </h2>
          <p className="text-sm leading-relaxed text-white">
            <b className="text-white">{company_name}</b> is one of South India’s
            trusted astrologers. <b>{person_name}</b> provides guidance in love,
            marriage, career & life.
          </p>
        </div>

        {/* CONTACT */}
        <div className="rounded-3xl p-6 bg-indigo-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-4">
            Contact Us
          </h2>

          <div className="text-sm">
            <p className="flex items-center gap-2 text-white">
              <Phone className="w-5 h-5 text-white" />
              {phone_number}
            </p>

            <p className="flex items-center gap-2 text-white mt-2">
              <MessageCircle className="w-5 h-5 text-white" />
              {whatsapp_number}
            </p>

            {/* <p className="text-xl mt-3 leading-relaxed text-white">
              <b>{address.line1}</b>
              <br />
              {address.line2}
              <br />
              {address.city}, {address.district}, {address.pincode}
              <br />
              {address.state}, {address.country}
              <br />
              <a href={`tel:${phone_number}`} className="underline">
                📞 +91 {phone_number}
              </a>
            </p> */}

            <p className="mt-3 font-semibold text-white">
              Best Spiritual Guidance 🌟
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="rounded-3xl p-6 bg-fuchsia-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-3">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2 text-white">
                <ChevronRight className="w-4 h-4 text-white" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* POLICY */}
        <div className="rounded-3xl p-6 bg-emerald-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-3">
            Policy page and more
          </h2>
          <ul className="space-y-2 text-xl">
            <li className="text-white">
              <a href="/terms" className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li className="text-white">
              <a
                href="/privacy-policy"
                className="hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-red-400 transition-colors"
              >
                Contact Page
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-zinc-950 to-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-400 font-inter tracking-wide">
            Designed with care by
          </p>

          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <button className="bg-red-800 hover:bg-red-900 text-white text-sm font-semibold px-5 py-2 rounded tracking-wide shadow-lg transition-all duration-300">
              Eswar · +91 88869 21826
            </button>
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 text-center md:text-right font-inter tracking-wide">
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-red-400 transition-colors"
          >
            {company_name}
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};
