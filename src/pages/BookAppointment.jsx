import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

const BookAppointment = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const services = [
    "Hixhama e Përgjithshme",
    "Hixhama Terapeutike",
    "Konsultim",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      alert("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
          "https://hixhame-backend.onrender.com/book-appointment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

      const data = await response.json();

      if (data.success) {
        alert("Rezervimi u dërgua me sukses!");

        setForm({
          name: "",
          phone: "",
          service: "",
          date: "",
          time: "",
        });
      } else {
        alert("Gabim gjatë dërgimit.");
      }
    } catch (error) {
      console.error(error);
      alert("Nuk u lidh me serverin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section
        id="book-appointment"
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-darkBlue">
            Rezervo Takimin
          </h1>

          <p className="text-slate-600 mt-3">
            Zgjidh shërbimin dhe cakto termin tënd lehtë dhe shpejt
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg border border-slate-100 rounded-2xl p-8 grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="text-sm text-slate-600">
              Emri dhe Mbiemri
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Shkruaj emrin"
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">
              Numri i telefonit
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+383 xx xxx-xxx"
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">
              Shërbimi
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary outline-none"
            >
              <option value="">Zgjedh shërbimin</option>

              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-600">
              Data
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">
              Ora
            </label>

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full primary-btn text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading
                ? "Duke dërguar rezervimin..."
                : "Konfirmo Rezervimin"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookAppointment;
