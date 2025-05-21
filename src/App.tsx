
import NavBar from "./components/NavBar";
import AnimatedOutlet from "./components/AnimatedOutlet";
import "./App.css";
// bg-[#0B0D17]
function App() {
  return (
    <div className="bg-[#0B0D17] overflow-x-hidden absolute w-full h-full">
      <NavBar />
      <AnimatedOutlet />
    </div>
  );
}

export default App;
