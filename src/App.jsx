import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;