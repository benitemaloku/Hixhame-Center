import React from "react";
import StatsCard from "./Cards/StatsCard";
import { STATS_DATA } from "../utils/data";

const Stats = () => {
  return (
    <section className="bg-secondary py-6">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS_DATA.map((item) => (
            <StatsCard
              key={item.label}
              iconUrl={item.iconUrl}
              count={item.count}
              label={item.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;