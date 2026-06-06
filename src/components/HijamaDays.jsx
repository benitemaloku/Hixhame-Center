import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HijamaDays = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const months = [
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
  const [startIndex, setStartIndex] = useState(0);

    const visibleDays = days.slice(startIndex, startIndex + 3);

  return (
    <section id="hijama-days" className="max-w-[1200px] mx-auto py-20 px-4 scroll-mt-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-3xl font-bold text-darkBlue mb-4">
          Ditët e Hixhames
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base">
          Zgjidh muajin dhe vitin për të parë ditët e rekomanduara sipas kalendarit Hixhri.
        </p>
      </div>

      {/* FILTER (clean modern card) */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">


            <div className="flex items-center justify-center gap-3 mb-6">
                <p className="text-sm text-slate-500 text-center">
                    Zgjidh muajin dhe vitin
                </p>
            </div>

    {/* Select Fields */}
    <div className="grid md:grid-cols-2 gap-4">

      <select
  value={month}
  onChange={(e) => setMonth(Number(e.target.value))}
  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-darkBlue"
>
  {months.map((monthName, index) => (
    <option key={index + 1} value={index + 1}>
      {monthName}
    </option>
  ))}
</select>

      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
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

     {/* CARDS SLIDER */}
<div className="relative max-w-5xl mx-auto">

  {/* LEFT BUTTON */}
  {startIndex > 0 && (
<button
  onClick={() => setStartIndex(startIndex - 1)}
  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:scale-105 transition"
>
  <FaChevronLeft className="text-darkBlue text-xl" />
</button>  )}

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {visibleDays.map((day, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition p-6 text-center"
      >

        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-4">
          <span className="text-lg font-bold text-red-500">
            {day.hijri.day}
          </span>
        </div>

        <h3 className="text-lg font-bold text-darkBlue">
          {day.hijri.month.en}
        </h3>

        <p className="text-sm text-slate-500 mb-3">
          {day.hijri.year} H
        </p>

        <div className="text-sm text-slate-600 border-t pt-3">
          {day.gregorian.day} {day.gregorian.month.en} {day.gregorian.year}
        </div>

        <button className="mt-5 w-full py-2.5 rounded-xl bg-darkBlue text-white text-sm hover:opacity-90 transition">
          Rezervo Termin
        </button>

      </div>
    ))}
  </div>

  {/* RIGHT BUTTON */}
  {startIndex + 3 < days.length && (
<button
  onClick={() => setStartIndex(startIndex + 1)}
  className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:scale-105 transition"
>
  <FaChevronRight className="text-darkBlue text-xl" />
</button>
  )}

</div>
    </section>
  );
};

export default HijamaDays;