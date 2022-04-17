//% Components
import Directory from "../../components/directory/directory.component";

import {Outlet} from "react-router-dom";

const Home = function () {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
