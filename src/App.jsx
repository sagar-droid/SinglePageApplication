import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Card from "./Components/Card";
import Error from "./Components/Error";
import Services from "./Components/Services";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Card" element={<Card />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
