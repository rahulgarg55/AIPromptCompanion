import { Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Slider from "./components/slider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </>
  );
}

export default App;
