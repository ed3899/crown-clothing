import {createContext, useState} from "react";

export const UserContext = createContext<{
  currentUser: {};
  setCurrentUser: React.Dispatch<React.SetStateAction<{}>>;
}>({
  currentUser: {},
  setCurrentUser: () => {},
});

interface UserProviderProps {
  children: any;
}
export const UserProvider = (props: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState({});
  const value = {currentUser, setCurrentUser};
  const {children} = props;

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
