import {User} from "firebase/auth";
import {createContext, useState, useEffect} from "react";

//% Utils
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext<{
  currentUser: null | User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
  currentUser: null,
  setCurrentUser: () => null,
});

interface UserProviderProps {
  children: any;
}
export const UserProvider = (props: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const value = {currentUser, setCurrentUser};
  const {children} = props;

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener(user => {
      if (user) createUserDocFromAuth(user);
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
