import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";

//%Styles
import "./navigation.styles.scss"

//% Assets
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>

        <Link className="nav-link" to="/sign-in">
          SIGN-IN
        </Link>
      </div>
    </div>

    <Outlet />
  </Fragment>
);

export default Navigation;
