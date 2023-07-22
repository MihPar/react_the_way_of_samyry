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
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "./components/Profile/profileContainer";
import { compose } from "redux";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div class="app-wraper-content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)

export default compose(
    withRouter, 
    (connect(mapStateToProps, { initializeApp })))
    (App);
