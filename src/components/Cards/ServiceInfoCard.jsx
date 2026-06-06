import React from "react";

const ServiceInfoCard = ({
  imgUrl,
  title,
  description,
  reverse,
}) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-[32px]
        overflow-hidden
        border border-slate-100
        shadow-sm
        hover:shadow-xl
        transition-all duration-500
      "
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* IMAGE */}
        <div className="md:w-[42%] overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="
              w-full
              h-[280px]
              md:h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex items-center">
          <div className="p-8 md:p-12 lg:p-14">

            {/* Small line */}
            <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-darkBlue mb-5">
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 leading-8 text-base whitespace-pre-line">
              {description}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;