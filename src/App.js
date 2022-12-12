import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
import Home from "./page/Home";
import Registrasi from "./page/Registrasi";

import './assets/App.css'




function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="registrasi" element={<Registrasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
