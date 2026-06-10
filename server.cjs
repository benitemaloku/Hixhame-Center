const express = require("express");
const cors = require("cors");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp Connected!");
});

client.on("authenticated", () => {
  console.log("✅ Authenticated!");
});

client.on("auth_failure", (msg) => {
  console.log("❌ Auth Failure:", msg);
});

client.on("loading_screen", (percent, message) => {
  console.log(`${percent}%`, message);
});

client.on("disconnected", (reason) => {
  console.log("❌ Disconnected:", reason);
});

// TEST ROUTE
app.get("/test", async (req, res) => {
  try {
    await client.sendMessage(
      "38343569577@c.us",
      "🚀 Test mesazh nga Hixhame Center"
    );

    res.send("Mesazhi u dergua me sukses!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Gabim gjate dergimit.");
  }
});

// ROUTE PER REZERVIME
app.post("/book-appointment", async (req, res) => {
  try {
    const { name, phone, service, date, time } = req.body;

    const message = `
📅 Rezervim i Ri për Hixhame

👤 Emri: ${name}
📞 Telefoni: ${phone}
🩺 Shërbimi: ${service}
📆 Data: ${date}
⏰ Ora: ${time}
`;

    await client.sendMessage(
      "38343569577@c.us",
      message
    );

    res.json({
      success: true,
      message: "Rezervimi u dergua me sukses",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Gabim gjate dergimit",
    });
  }
});

// START WHATSAPP
client.initialize();

// START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});