// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Nav from "./components/Nav/nav";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/HeaderContainer"

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer  />
      <Nav />
      <div class="app-wraper-content">
        <Routes>
          <Route
            path="/profile/:userId?"
            element={<ProfileContainer />}
          />
          <Route
            path="/dialogs"
            element={<DialogsContainer />} /> 
            <Route
            path="/users"
            element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
