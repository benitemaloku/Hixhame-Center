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
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-darkBlue">
              Rezervo Takimin
            </h1>

            <p className="text-slate-500 mt-3">
              Plotëso formularin dhe rezervimi do të dërgohet direkt në
              WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form-card space-y-6"
          >
            <div>
              <label className="form-label">
                Emri dhe Mbiemri
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Shkruaj emrin dhe mbiemrin"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">
                Numri i Telefonit
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+383 44 123 456"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">
                Shërbimi
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Zgjidh shërbimin</option>

                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">
                Data
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">
                Ora
              </label>

              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
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
