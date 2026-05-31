import React from "react";

const ServiceInfoCard = ({
  imgUrl,
  title,
  description,
  reverse,
}) => {
  return (
    <div className="bg-secondary rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40">

      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >

        {/* IMAGE */}
        <div className="flex-1">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-56 md:h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex items-center">
          <div className="p-7 md:p-12">

            <h3 className="text-2xl md:text-3xl font-bold text-darkBlue mb-5">
              {title}
            </h3>

            <p className="text-sm md:text-base leading-8 text-slate-700 whitespace-pre-line">
              {description}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceInfoCard;