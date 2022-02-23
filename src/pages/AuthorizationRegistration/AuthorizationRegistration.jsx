import React from "react";
import Regist from "./Regist.jsx";
import Auto from "./Auto.jsx";
import { useDispatch, useSelector } from "react-redux";
import { reg_AutoValueInput } from "../../redux/auto_regis/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { close_MenuAutoReg } from "../../redux/modal/action";
const AuthorizationRegistration = () => {
  const usedispatch = useDispatch();
  const navigate = useNavigate();
  const chengeToggleMenu = useSelector(
    (state) => state.modal.flagonChangeTrigger
  );
  const dispatch = useDispatch();
  const { fullName, email, password } = useSelector((state) => state.avtoReg);

  const regAutoFormGet = async (e) => {
    if (e.target.name === "registration") {
      console.log("мы в блоке с регистарцией");

      // сделать проверку, есть логин занят то выводить свооотсветвующубю ошибку
      try {
        const resp = await axios
          .post("http://localhost:5656/auth/register", {
            fullName: fullName,
            email: email,
            password: password,
          })
          .then((respons) => {
          
            window.localStorage.setItem("token", respons.data.token);
            window.localStorage.setItem("userId", respons.data._id);
            window.localStorage.setItem("fullName", respons.data.fullName);
            window.localStorage.setItem("createdAt", respons.data.createdAt);
          });
        navigate("/profile");
        usedispatch(close_MenuAutoReg());
        alert(`Добро пожаловать ${window.localStorage.getItem("fullName")}`);
      } catch (error) {
        //сделать еще одну проверку 
        alert("Вы ввели некорректные данные для регистрации");
      }
    } else if (e.target.name === "authorization") {
      console.log("мы в блоке с авторизацией");
      try {
        const resp = await axios
          .post("http://localhost:5656/auth/login", {
            email: email,
            password: password,
          }) 
          .then((respons) => {
            
            window.localStorage.setItem("token", respons.data.token);
            window.localStorage.setItem("userId", respons.data._id);
            window.localStorage.setItem("fullName", respons.data.fullName);
            //при авториацзии не получает дату
          });
        navigate("/home");
        usedispatch(close_MenuAutoReg());
        alert(`Добро пожаловать ${window.localStorage.getItem("fullName")}`);
      } catch (error) {
        alert("Вы ввели некорректные данные для авторизации");
      }
    }
  };

  //Отлавливаем текст в инпутах
  const regAutoValueInput = (e) => {
    dispatch(reg_AutoValueInput(e.target.value, e.target.name));
  };

  return (
    <div>
      {chengeToggleMenu === null ? ( //Если null то ничего не показывай, если true то показывай Regist, если ничего из перечисленного не сработало то Auto
        ""
      ) : chengeToggleMenu === true ? (
        <Regist
          regAutoValueInput={regAutoValueInput}
          regAutoFormGet={regAutoFormGet}
        />
      ) : (
        <Auto
          regAutoValueInput={regAutoValueInput}
          regAutoFormGet={regAutoFormGet}
        />
      )}
    </div>
  );
};

export default AuthorizationRegistration;
