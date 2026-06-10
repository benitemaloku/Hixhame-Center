import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

const BookAppointment = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      alert("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

    const message = `
📅 REZERVIM I RI PËR HIXHAME

👤 Emri dhe Mbiemri: ${form.name}
📞 Telefoni: ${form.phone}
🩺 Shërbimi: ${form.service}
📆 Data: ${form.date}
⏰ Ora: ${form.time}
`;

    // Vendos numrin tënd të WhatsApp-it
    const whatsappNumber = "38343569577";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto py-20 px-4 min-h-screen">
        {/* Titulli */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-darkBlue">
            Rezervo Takimin
          </h1>

          <p className="text-slate-600 mt-3">
            Plotëso formularin dhe rezervimi do të dërgohet direkt në WhatsApp.
          </p>
        </div>

        {/* Forma */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg border border-slate-100 rounded-2xl p-8 grid md:grid-cols-2 gap-6"
        >
          {/* Emri */}
          <div>
            <label className="text-sm text-slate-600">
              Emri dhe Mbiemri
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Shkruaj emrin dhe mbiemrin"
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          {/* Telefoni */}
          <div>
            <label className="text-sm text-slate-600">
              Numri i Telefonit
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+383 xx xxx xxx"
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          {/* Shërbimi */}
          <div>
            <label className="text-sm text-slate-600">
              Shërbimi
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            >
              <option value="">Zgjidh shërbimin</option>

              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div>
            <label className="text-sm text-slate-600">
              Data
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          {/* Ora */}
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">
              Ora
            </label>

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          {/* Butoni */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full primary-btn text-base"
            >
              Dërgo Rezervimin në WhatsApp
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookAppointment;