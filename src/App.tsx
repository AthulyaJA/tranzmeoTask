import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import RoutesData from "./components/Route/RoutesData";


const App = () => {
  return (
    <BrowserRouter>
      <RoutesData />
    </BrowserRouter>
  );
};

export default App;