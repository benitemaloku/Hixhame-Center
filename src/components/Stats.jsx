import React from "react";
import StatsCard from "./Cards/StatsCard";
import { STATS_DATA } from "../utils/data";

const Stats = () => {
  return (
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {STATS_DATA.map((item) => (
        <div
          key={item.label}
          className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <img
            src={item.iconUrl}
            className="w-14 h-14 mx-auto mb-5"
          />

          <h3 className="text-4xl font-bold text-primary">
            {item.count}
          </h3>

          <p className="mt-2 text-slate-600">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
  );
};

export default Stats;