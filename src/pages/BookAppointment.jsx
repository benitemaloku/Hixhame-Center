
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
    platform: "whatsapp",
  });

  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, date, time, platform } = form;

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
📅 REZERVIM I RI PËR HIXHAME

👤 Emri dhe Mbiemri: ${name}
📞 Telefoni: ${phone}
🩺 Shërbimi: ${service}
📆 Data: ${date}
⏰ Ora: ${time}
`;

    let url = "";

    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/38343569577?text=${encodeURIComponent(
          message
        )}`;
        break;

      case "viber":
        url = `viber://chat?number=%2B38343569577`;
        break;

      case "telegram":
        url = `https://t.me/USERNAME_YT`;
        break;

      default:
        return;
    }

    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      platform: "whatsapp",
    });

    alert("Rezervimi u dërgua me sukses!");
  };

  return (
    <> <Navbar />

    <section className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
            Rezervo Takimin
          </h1>

          <p className="text-slate-500 mt-4 text-lg">
            Plotëso formularin dhe dërgo rezervimin përmes platformës që
            preferon.
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
              placeholder="+38344123456"
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

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">
              Dërgo përmes
            </label>

            <select
              name="platform"
              value={form.platform}
              onChange={handleChange}
              className="form-input"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="viber">Viber</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>

          <div>
            <label className="form-label">
              Data
            </label>

            <input
              type="text"
              name="date"
              value={form.date}
              placeholder="Zgjidh datën"
              readOnly
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">
              Ora
            </label>

           <input
              type="text"
              name="time"
              value={form.time}
              placeholder="Zgjidh orën"
              readOnly
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              min="09:00"
              max="18:00"
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="w-full primary-btn"
          >
            Dërgo Rezervimin
          </button>
        </form>
      </div>
    </section>

    <Footer />

  </>
  );
}
