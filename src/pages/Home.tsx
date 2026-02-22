import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";

const Home = () => {
  return (
    <div className="flex flex-col   w-full h-full">
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Relationship Guidance",
      desc: "Supportive conversations to help you understand situations, improve communication, and gain emotional clarity.",
      img: "https://i.pinimg.com/736x/4a/c8/aa/4ac8aaa977a4eef9bb1eac0041929380.jpg",
    },
    {
      title: "Marriage & Family Concerns",
      desc: "Professional guidance for handling misunderstandings, stress, and important life decisions with clarity.",
      img: "https://i.pinimg.com/1200x/c1/2b/fc/c12bfc17ac4630ade4f0e1e4a1f819e2.jpg",
    },
    {
      title: "Career & Education Direction",
      desc: "Advisory conversations to help with focus, planning, and confidence in career or education choices.",
      img: "https://i.pinimg.com/736x/73/49/66/73496669119b34a1dd1ab91ffd626f68.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12 montserrat">
        Common Problems We Solve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white font-poppins tracking-wide">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 mt-3 font-inter leading-relaxed">
                {item.desc}
              </p>

              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6"
              >
                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md text-sm font-semibold font-inter tracking-wide shadow-lg transition-all duration-300">
                  CHAT ON WHATSAPP
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutAstrologer = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-neutral-950 overflow-hidden">
      {/* Heavy Abstract Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          {/* Section Tag */}
          <span className="inline-block border border-white/20 text-white/80 px-5 py-2 text-sm tracking-widest font-semibold font-inter">
            ABOUT US
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white font-poppins tracking-wide">
            {company_name}
          </h2>

          {/* Divider */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-red-700 to-purple-700"></div>

          {/* Paragraphs */}
          <p className="text-gray-300 text-lg leading-relaxed font-inter">
            {company_name} is a professional consulting platform focused on
            providing thoughtful guidance through meaningful conversations. Our
            approach emphasizes clarity, understanding, and responsible
            decision-making.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-inter">
            Every interaction is handled with integrity, confidentiality, and
            respect. We believe strong outcomes begin with mutual trust and
            clear communication.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-5 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="bg-red-800 hover:bg-red-900 text-white px-7 py-3 font-semibold tracking-wide shadow-xl transition-all duration-300"
            >
              CALL NOW
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 hover:bg-green-900 text-white px-7 py-3 font-semibold tracking-wide shadow-xl transition-all duration-300"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="https://i.pinimg.com/1200x/2b/7e/f6/2b7ef69aef08f4f9ec85e1f37984332a.jpg"
              alt="Consulting Banner"
              className="w-full h-[420px] object-cover shadow-2xl border border-white/10"
            />

            {/* Heavy Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-900/40 blur-[100px]"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-900/40 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Relationship Guidance",
      desc: "Supportive conversations designed to help you understand emotions, improve communication, and gain clarity in relationships.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Partner & Personal Concerns",
      desc: "Professional guidance to navigate misunderstandings, stress, and emotional challenges with maturity and perspective.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Emotional Well-Being",
      desc: "Thoughtful advisory support focused on emotional balance, self-awareness, and confident decision-making.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family & Life Guidance",
      desc: "Structured conversations to help address family concerns, responsibilities, and important life choices with clarity.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-neutral-950 overflow-hidden">
      {/* Heavy Background Accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/30 blur-[140px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-900/30 blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white font-poppins tracking-wide">
            Our Areas of Guidance
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-red-700 to-purple-700 mx-auto mt-5"></div>
          <p className="mt-6 text-gray-400 text-lg font-inter max-w-2xl mx-auto">
            We offer professional, confidential guidance focused on
            understanding, clarity, and responsible decision-making.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-b from-zinc-900 to-black border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/65"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white font-poppins tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mt-3 font-inter">
                  {service.desc}
                </p>

                <a href={`tel:${phone_number}`} className="inline-block mt-6">
                  <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 font-semibold tracking-wide shadow-lg transition-all duration-300">
                    CALL NOW
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Specialist",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Husband & Wife Dispute",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Problems",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 montserrat"
        >
          Astrology Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl 
                shadow-md hover:shadow-purple-500/20 
                transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-white montserrat">
                  {service.title}
                </h3>

                <a href={`tel:${phone_number}`}>
                  <button
                    className="mt-4 w-full flex items-center justify-center gap-2 
                      bg-purple-600 hover:bg-purple-700 
                      text-white text-sm font-semibold 
                      py-2.5 rounded-full transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological remedies to reunite love with trust & harmony.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
    },
    {
      title: "Court Case Solution",
      icon: Scale,
      desc: "Powerful astrology solutions for legal & court issues.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
    },
    {
      title: "Family Problem",
      icon: Users,
      desc: "Restore peace & happiness in family relationships.",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
    },
    {
      title: "Business Problem",
      icon: Briefcase,
      desc: "Grow business, profits & career with astrology remedies.",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
    },
    {
      title: "Childless Couple",
      icon: Users,
      desc: "Blessings & remedies for couples seeking children.",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    },
    {
      title: "Thantra Pooja",
      icon: Sparkles,
      desc: "Spiritual poojas for karma cleansing & energy balance.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 
            bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 
            bg-clip-text text-transparent montserrat"
        >
          Our Astrology Services
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`relative rounded-3xl p-1 bg-gradient-to-br ${service.gradient}`}
            >
              {/* Inner Card */}
              <div className="h-full rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
                {/* Icon */}
                <div
                  className={`mx-auto mb-6 w-20 h-20 rounded-full 
                    flex items-center justify-center 
                    bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 montserrat">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 open-sans">
                  {service.desc}
                </p>

                {/* Button */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-white
                      bg-gradient-to-r ${service.gradient}
                      hover:brightness-110 transition-all duration-300`}
                  >
                    Contact Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section className="mt-2 mb-2 relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20 px-6 overflow-hidden">
      {/* Stars background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400/60 backdrop-blur-xl">
            <img
              src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
              alt={person_name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-4 border-pink-400/40 animate-spin-slow"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg montserrat">
            <Sparkles className="inline w-8 h-8 text-yellow-300 animate-pulse mr-2" />
            Astrologer {person_name}
          </h2>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-200 montserrat">
            🌌 India’s Most Trusted Astrology Expert
          </h3>
          <p className="text-gray-300 leading-relaxed text-base open-sans">
            With profound knowledge in{" "}
            <span className="text-yellow-400">Vastu</span>,{" "}
            <span className="text-pink-400">horoscope reading</span>, and{" "}
            <span className="text-purple-300">spiritual guidance</span>,{" "}
            {person_name}
            Ji empowers individuals to overcome obstacles and discover their
            true destiny.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400/60 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Special Note */}
          <p className="mt-5 text-yellow-300 font-bold tracking-wide text-sm md:text-base poppins">
            Accurate Predictions | Trusted Guidance | Life-changing Remedies ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
