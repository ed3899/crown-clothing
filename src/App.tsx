//% Components
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import {Routes, Route, Link, Outlet} from "react-router-dom";

const Shop = () => <div>Im the shop</div>;
const App = function () {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
