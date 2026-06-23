import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

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

    <section className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Titulli */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-darkBlue">
            Rezervo Takimin
          </h1>

          <p className="text-slate-500 mt-3">
            Plotëso formularin dhe rezervimi do të dërgohet direkt në WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-slate-100
            p-6
            md:p-10
            space-y-6
          "
        >
          {/* Emri */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Emri dhe Mbiemri
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Shkruaj emrin dhe mbiemrin"
              className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                placeholder-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-500
                transition
              "
            />
          </div>

          {/* Telefoni */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Numri i Telefonit
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+383 44 123 456"
              className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                placeholder-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-500
                transition
              "
            />
          </div>

          {/* Sherbimi */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Shërbimi
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-500
                transition
              "
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
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Data
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-500
                transition
              "
            />
          </div>

          {/* Ora */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Ora
            </label>

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-500
                transition
              "
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
      </div>
    </section>

    <Footer />
  </>
);
};

export default BookAppointment;
