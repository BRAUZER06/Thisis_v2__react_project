import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile/Profile";
import Section from "./pages/Section/Section";
import Header from "./components/Header/Header";
import {Routes,Route,useNavigate,} from "react-router-dom";
import AutoRegis from "./pages/AuthorizationRegistration/AuthorizationRegistration.jsx";
// import {instance} from './config/axios'



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <div className="header">
            <Header />
          </div>
          <div>
            <Section />
          </div>
          <div>
            <AutoRegis />
          </div>
        </div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <Nav />
    </div>
  );
}

export default App;
