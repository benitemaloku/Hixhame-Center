import React from "react";
import { SERVICES } from "../utils/data";
import ServiceInfoCard from "./Cards/ServiceInfoCard";

const OurServices = () => {
  return (
    <section id="ourservice" className="max-w-[1200px] mx-auto py-20 px-4">

      <div className="text-center mb-16">
        <h2 className="text-xl md:text-5xl font-bold text-darkBlue mb-5">
          Shërbimet Tona
        </h2>

        <p className="max-w-2xl mx-auto text-slate-600 leading-7 text-sm md:text-base">
          Ne krijojmë zgjidhje moderne dhe profesionale për biznesin tuaj,
          duke kombinuar dizajnin kreativ me teknologjinë moderne.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {SERVICES.map((item, index) => (
          <ServiceInfoCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            reverse={index === 1}
          />
        ))}
      </div>

    </section>
  );
};

export default OurServices;