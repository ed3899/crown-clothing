import {User} from "firebase/auth";
import {createContext, useState} from "react";

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
