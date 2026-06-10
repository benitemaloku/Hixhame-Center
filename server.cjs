const express = require("express");
const cors = require("cors");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    executablePath:
      process.env.PUPPETEER_EXECUTABLE_PATH ||
      "/opt/render/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--single-process",
    ],
  },
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

client.on("disconnected", (reason) => {
  console.log("❌ Disconnected:", reason);
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

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

client.initialize();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
