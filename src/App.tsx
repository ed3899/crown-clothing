//% Components
import Home from "./routes/home/home.component";

import {Routes, Route, Link} from "react-router-dom";

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
