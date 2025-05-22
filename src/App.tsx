import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DestinationPage from "./pages/Destination";
import CrewPage from "./pages/Crew";
import TechnologyPage from "./pages/Technology";
import NavBar from "./components/NavBar";
import AnimatedOutlet from "./components/AnimatedOutlet";
import "./App.css";
// bg-[#0B0D17]
function App() {
  return (
    <Router>
      <div className="relative">
        <NavBar />
        <AnimatedOutlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
