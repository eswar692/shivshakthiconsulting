import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet Astrologer ${person_name}?`,
    answer: `Yes, personal meetings are available with prior appointment. 📲 Whatsapp: ${phone_number}`,
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in the world. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Kind Of Astrology Services Are Available Here?",
    answer:
      "We provide Vastu, horoscope, career, marriage, health, and business guidance.",
  },
  {
    question: "What Kind Of Products Are Available?",
    answer:
      "Astrological remedies, gemstones, yantras, and spiritual products are available.",
  },
  {
    question: "Do We Avail Courses On Astrology?",
    answer: "Yes, astrology learning courses are offered for different levels.",
  },
  {
    question: "What Do We Teach In The Astrology Course?",
    answer:
      "We cover horoscope reading, palmistry basics, and predictive astrology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-neutral-950 text-white overflow-hidden">
      {/* Heavy Background Accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/30 blur-[140px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-900/30 blur-[140px]"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black font-poppins tracking-wide text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-red-700 to-purple-700 mx-auto mt-5"></div>
          <p className="text-gray-400 mt-6 text-lg font-inter max-w-2xl mx-auto">
            Clear answers about our professional guidance approach, process, and
            expectations.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 shadow-xl overflow-hidden transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg md:text-xl font-semibold font-inter text-white hover:text-red-400 transition-colors"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-red-500" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed font-inter">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a href={`https://wa.me/${phone_number}`} target="_blank">
            <button className="bg-green-800 hover:bg-green-900 text-white font-semibold tracking-wide px-8 py-4 shadow-xl transition-all duration-300">
              CHAT WITH US
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
