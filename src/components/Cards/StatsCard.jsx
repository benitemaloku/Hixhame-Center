import React from "react";

const StatsCard = ({ iconUrl, count, label }) => {
  return (
    <div className="min-w-36 flex flex-col items-center justify-center py-8 sm:py-1">
      
      <div className="w-16 h-16 flex justify-center items-center bg-lightBlue rounded-full">
        <img
          src={iconUrl}
          alt={label}
          className="w-10 h-10 object-contain"
        />
      </div>

      <p className="text-xl md:text-xl text-darkBlue font-medium mt-4">
        {count}
      </p>

      <span className="text-sm md:text-md text-darkBlue mt-1 text-center">
        {label}
      </span>
    </div>
  );
};

export default StatsCard;