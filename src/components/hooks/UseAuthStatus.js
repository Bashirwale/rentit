import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UseAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingAuthStatus(false);
      });
    }
    return () => {
      isMounted.current = false;
    };
  });

  return { loggedIn, checkingAuthStatus };
};

export default UseAuthStatus;
