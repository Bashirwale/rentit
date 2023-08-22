import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileLink from "./MobileLink";
import NavLinks from "./NavLinks";

const NavMenu = ({ handleOpenLogin, openModal, setOpenModal }) => {
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <div className="flex justify-between top-0 items-center px-6 ease-in-out transition">
      <Logo />
      <div className="flex items-center gap-2">
        <NavLinks handleOpenLogin={handleOpenLogin} user={user} />
        <GiHamburgerMenu
          onClick={handleOpenMenu}
          className="md:hidden text-lg cursor-pointer"
        />
        {openMenu && (
          <MobileLink
            handleOpenLogin={handleOpenLogin}
            user={user}
            setOpenMenu={setOpenMenu}
          />
        )}
        {user && (
          <button onClick={() => setOpenModal(!openModal)}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
