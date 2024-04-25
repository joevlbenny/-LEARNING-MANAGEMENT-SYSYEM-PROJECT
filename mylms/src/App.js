// import { Icon } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
// import Signup from "./Assets/Signup";
function App() {



  return (

    <div className='App'>
      <BrowserRouter>

        <Main />
      </BrowserRouter>



    </div>
  );
}


export default App;