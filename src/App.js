// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div class="app-wraper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updataNewPostText={props.updataNewPostText}
              />
            }
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
