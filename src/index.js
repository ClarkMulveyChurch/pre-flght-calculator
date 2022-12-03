import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./calculator.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./components/NavbarElements";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ManagePersonsForm from "./components/managePersonsForm";
import ManageAircraftForm from "./components/manageAircraftForm";
import Weather from "./components/weather";
import { DataProvider } from "./context/dataContext";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to="/">Pre-Flight</NavLink>
            <NavLink to="/pilotpass">Manage Pilots/Passengers</NavLink>
            <NavLink to="/aircraft">Manage Aircraft</NavLink>
            <NavLink to="/weather">Weather</NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pilotpass" element={<ManagePersonsForm />} />
          <Route path="/aircraft" element={<ManageAircraftForm />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
