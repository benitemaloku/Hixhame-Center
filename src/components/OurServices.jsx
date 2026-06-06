import React from "react";
import { SERVICES } from "../utils/data";
import ServiceInfoCard from "./Cards/ServiceInfoCard";

const OurServices = () => {
  return (
    <section
      id="ourservice"
      className="bg-slate-50 py-24 scroll-mt-6"
    >
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">
            Shërbimet profesionale 
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-8 text-base">
            Ofrojmë trajtime profesionale të hixhames në një ambient të sigurt,
            të pastër dhe relaksues, duke ndjekur standardet më të larta të
            higjienës dhe kujdesit ndaj klientit.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-16">
          {SERVICES.map((item, index) => (
            <ServiceInfoCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;