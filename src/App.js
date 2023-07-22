import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer";
import Listings from "./pages/Listings";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";

function App() {
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  return (
    <div className="relative font-sans pt-6">
      <Router>
        <NavMenu handleOpenLogin={handleOpenLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
        {openLogin && <Login setOpenLogin={setOpenLogin} />}
      </Router>
    </div>
  );
}

export default App;
