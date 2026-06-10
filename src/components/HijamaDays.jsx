import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HijamaDays = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [direction, setDirection] = useState("right");
  const [animationKey, setAnimationKey] = useState(0);

  const monthsSq = [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nëntor",
    "Dhjetor",
  ];

  useEffect(() => {
    fetchHijamaDays();
  }, [month, year]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchHijamaDays = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
      );

      const data = await response.json();

      const hijamaDays = data.data.filter((day) =>
        [17, 19, 21].includes(Number(day.hijri.day))
      );

      setDays(hijamaDays);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const visibleCount = isMobile ? 1 : 3;
  const visibleDays = days.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="max-w-[1200px] mx-auto py-20 px-4 scroll-mt-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">
          Ditët e Hixhames
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 text-base">
          Zgjidh muajin dhe vitin për të parë ditët e rekomanduara sipas kalendarit Hixhri.
        </p>
      </div>

      {/* FILTER */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">

          <div className="grid md:grid-cols-2 gap-4">

            <select
              value={month}
              onChange={(e) => {
                setMonth(Number(e.target.value));
                setStartIndex(0);
              }}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-darkBlue"
            >
              {monthsSq.map((monthName, index) => (
                <option key={index + 1} value={index + 1}>
                  {monthName}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => {
                setYear(Number(e.target.value));
                setStartIndex(0);
              }}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-darkBlue"
            >
              {[2025, 2026, 2027, 2028, 2029, 2030].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

          </div>

        </div>
      </div>

      {/* STATES */}
      {loading && (
        <p className="text-center text-slate-500">Duke ngarkuar...</p>
      )}

      {!loading && days.length === 0 && (
        <p className="text-center text-slate-500">
          Nuk ka ditë të rekomanduara për këtë periudhë.
        </p>
      )}

      {/* SLIDER */}
      <div className="relative max-w-5xl mx-auto">

        {/* LEFT */}
        {startIndex > 0 && (
          <button
            onClick={() => {
              setDirection("left");
              setStartIndex((prev) => prev - 1);
              setAnimationKey((prev) => prev + 1);
            }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:scale-105 transition"
          >
            <FaChevronLeft className="text-darkBlue text-xl" />
          </button>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {visibleDays.map((day, index) => (
            <div
              key={`${animationKey}-${index}`}
              className={`
                bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg
                p-6 text-center
                ${direction === "right" ? "animate-right" : "animate-left"}
              `}
            >

              {/* Gregorian */}
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">
                  {day.gregorian.day}
                </span>
              </div>

              <h3 className="text-lg font-medium text-darkBlue">
                {monthsSq[Number(day.gregorian.month.number) - 1]}
              </h3>

              <p className="text-base text-slate-500 mb-3">
                {day.gregorian.year}
              </p>

              {/* Hijri */}
              <div className="text-base text-slate-600 border-t pt-3">
                {day.hijri.day} {day.hijri.month.en} {day.hijri.year} H
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT */}
        {startIndex + visibleCount < days.length && (
          <button
            onClick={() => {
              setDirection("right");
              setStartIndex((prev) => prev + 1);
              setAnimationKey((prev) => prev + 1);
            }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:scale-105 transition"
          >
            <FaChevronRight className="text-darkBlue text-xl" />
          </button>
        )}

      </div>
    </section>
  );
};

export default HijamaDays;