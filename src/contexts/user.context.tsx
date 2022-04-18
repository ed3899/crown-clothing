import {User} from "firebase/auth";
import React, {createContext, useEffect, useReducer} from "react";

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

const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

type ACTIONTYPE = {type: "SET_CURRENT_USER"; payload: any};

const userReducer = (state: typeof INITIAL_STATE, action: ACTIONTYPE) => {
  const {type, payload} = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

interface UserProviderProps {
  children: React.ReactNode;
}
export const UserProvider = (props: UserProviderProps) => {
  // const [currentUser, setCurrentUser] = useState<null | User>(null);

  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user: any) => {
    dispatch({type: "SET_CURRENT_USER", payload: user});
  };

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
