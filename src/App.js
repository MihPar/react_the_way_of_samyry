// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

// let component = () => {<Profile />}

const App = (props) => {
    
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wraper-content">
           <Routes>
                <Route path="/profile" element={<Profile postData={props.postData} />} />
                <Route path="/dialogs" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
            </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
