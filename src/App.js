import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wraper-content">
          <Routes>
            <Route path="/Dialogs" component={Dialogs} />
            <Route path="/Profile" component={Profile} />
          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
