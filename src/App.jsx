import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";
import Design3 from "./pages/Design3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-1" element={<Design1 />} />
        <Route path="/design-2" element={<Design2 />} />
        <Route path="/design-3" element={<Design3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;