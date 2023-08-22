import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer";
import Listings from "./pages/Listings";
import Blogs from "./pages/Blogs";
import Login from "./components/modals/Login";
import Signup from "./components/modals/Signup";
import CreatePost from "./pages/CreatePost";
import PrivateRoutes from "./components/PrivateRoutes";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfileModal from "./components/modals/UserProfileModal";

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false);
  };
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false);
  };

  return (
    <div className="relative pt-6">
      <ToastContainer />
      <Router>
        <NavMenu
          handleOpenLogin={handleOpenLogin}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        {openModal && <UserProfileModal setOpenModal={setOpenModal} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/"
            element={<PrivateRoutes handleOpenLogin={handleOpenLogin} />}
          >
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
        </Routes>
        <Footer />
        {openLogin && (
          <Login
            setOpenLogin={setOpenLogin}
            handleOpenSignUp={handleOpenSignUp}
            setOpenSignUp={setOpenSignUp}
          />
        )}
        {openSignUp && (
          <Signup
            setOpenSignUp={setOpenSignUp}
            handleOpenLogin={handleOpenLogin}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
