import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Vapes from "./components/pages/Vapes";
import Pods from "./components/pages/Pods";
import Juices from "./components/pages/Juices";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vapes" element={<Vapes />} />
            <Route path="/pods" element={<Pods />} />
            <Route path="/juices" element={<Juices />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
