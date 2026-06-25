import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  "Hixhama e Përgjithshme",
  "Hixhama Terapeutike",
  "Konsultim",
];

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

      const handleSubmit = (e) => {
        e.preventDefault();
      
        const { name, phone, service, date, time } = form;
      
        if (!name || !phone || !service || !date || !time) {
          alert("Ju lutem plotësoni të gjitha fushat.");
          return;
        }
      
        const phoneRegex = /^(\+383|0)[0-9]{8}$/;
      
        if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
          alert("Numri i telefonit nuk është valid.");
          return;
        }
      
        const message = `
      REZERVIM I RI PËR HIXHAME
      
  Emri: ${name}
  Telefoni: ${phone}
  Shërbimi: ${service}
  Data: ${date}
  Ora: ${time}
      `;
      
        try {
          window.open(
            `https://wa.me/38349797669?text=${encodeURIComponent(message)}`,
            "_blank"
          );
      
          setForm({
            name: "",
            phone: "",
            service: "",
            date: "",
            time: "",
          });
      
          alert("Rezervimi u dërgua me sukses!");
        } catch (err) {
          alert("Diçka shkoi gabim.");
        }
      };
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
              Rezervo Takimin
            </h1>
            <p className="text-slate-500 mt-4 text-lg">
              Plotëso formularin dhe dërgo rezervimin përmes platformës që preferon.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="form-card space-y-5">

            {/* NAME */}
            <div>
              <label className="form-label">Emri dhe Mbiemri</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Shkruaj emrin dhe mbiemrin"
                className="form-input"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="form-label">Numri i Telefonit</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+38344123456"
                className="form-input"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label className="form-label">Shërbimi</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Zgjidh shërbimin</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* DATE (CUSTOM LOOK) */}
            <div>
              <label className="form-label">Data</label>
              <div className="relative">
                {!form.date && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    Zgjidh datën
                  </span>
                )}
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="form-input appearance-none"
                />
              </div>
            </div>

            {/* TIME (CUSTOM LOOK) */}
            <div>
              <label className="form-label">Ora</label>
              <div className="relative">
                {!form.time && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    Zgjidh orën
                  </span>
                )}
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  min="09:00"
                  max="18:00"
                  className="form-input appearance-none"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="w-full primary-btn">
              Dërgo Rezervimin në WhatsApp
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
