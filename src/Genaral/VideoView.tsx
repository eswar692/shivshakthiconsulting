import { phone_number, whatsapp_number, company_name } from "./secrete";

const ImageView = () => {
  return (
    <div className="relative w-full h-[480px] overflow-hidden mb-2">
      {/* Image Background */}
      <img
        src="https://i.pinimg.com/736x/b6/a8/67/b6a867af8c53ae48e3d7db900439816e.jpg"
        alt="Banner"
        className="w-full h-full object-cover scale-105"
      />

      {/* Heavy Dark Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-wide font-poppins">
          {company_name}
        </h1>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-gradient-to-r from-red-600 to-purple-600 my-5"></div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-lg font-inter leading-relaxed max-w-md md:max-w-xl">
          Professional guidance focused on clarity, understanding, and informed
          decision-making. Built on trust, integrity, and confidentiality.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-5">
          <a
            href={`tel:${phone_number}`}
            className="bg-red-700 hover:bg-red-800 text-white px-7 py-3 rounded-md font-semibold font-inter tracking-wide shadow-xl transition-all duration-300"
          >
            CALL NOW
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-md font-semibold font-inter tracking-wide shadow-xl transition-all duration-300"
          >
            CHAT NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
