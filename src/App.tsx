//% Components
import Home from "./routes/home/home.component";

import {Routes, Route, Link} from "react-router-dom";

const Shop = () => <div>Im the shop</div>;
const App = function () {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
