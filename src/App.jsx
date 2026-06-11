import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import BookAppointment from "./pages/BookAppointment";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;