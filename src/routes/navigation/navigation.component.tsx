//% Libs
import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";

//% Utils
import {signOutUser} from "../../utils/firebase/firebase.utils";

//% Context
import {UserContext} from "../../contexts/user.context";

//%Styles
import "./navigation.styles.scss";

//% Assets
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
