import React, { useEffect } from "react";
import "./App.css";
import AutoRegis from "./pages/AuthorizationRegistration/AuthorizationRegistration.jsx";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Section from "./pages/Section/Section";
// import {instance} from './config/axios'

import {
  Routes,
  Route,
  Redirect,
  Link,
  useNavigate,
  exast,
} from "react-router-dom";
import Profile from "./pages/Profile/Profile";

import { useDispatch } from "react-redux";


function App() {
const navigate = useNavigate()




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
