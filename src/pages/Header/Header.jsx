import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightToBracket,
  faUser,
  faXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  onClick_ToggleMenuAutoReg,
  close_MenuAutoReg,
} from "../../redux/modal/action";

import {
  createRecord_MenuNav,
  exiteProfile_MenuNav,
  home_MenuNav,
  toggle_MenuNav,
} from "../../redux/sidebar/action";

import {
  value_InputHeader,
  toggle_InputCheckHeader,
} from "../../redux/header/action";
import { Link } from "react-router-dom";

import s from "./header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSearch = useSelector((state) => state.header.toggleSearch);
  const inputValue = useSelector((state) => state.header.inputValue);
  const openHomeMenu = useSelector((state) => state.sideBar.openHomeMenu);


  const onClickToggleMenuAutoReg = () => {
    dispatch(onClick_ToggleMenuAutoReg());
  };
  const closeMenuAutoReg = () => {
    dispatch(close_MenuAutoReg());
  };
  const exiteProfileMenuNav = () => {
    dispatch(exiteProfile_MenuNav());
    dispatch(toggle_MenuNav());
    localStorage.clear();
  };
  const createRecordMenuNav = () => {
    dispatch(createRecord_MenuNav());
  };
  const toggleInputCheckHeader = () => {
    dispatch(toggle_InputCheckHeader());
    dispatch(value_InputHeader(''))
  };
  const homeMenuNav = () => {
    dispatch(home_MenuNav());
  };
  // непонятки с тем что эта функция не может следить за переменно toggleSearch, она не видит его значения
  const valueInputHeader = (e) => {
    if (toggleSearch === true) {
      dispatch(value_InputHeader(e.target.value));
    } else if (toggleSearch === false) {
      dispatch(value_InputHeader(""));
    }
  };

  return (
    <header className={s.header}>
      {toggleSearch ? (
        <div className={s.header_input}>
          <input
            value={inputValue}
            onChange={valueInputHeader}
            type="text"
            placeholder="Поиск статьи по заголовку или тексту..."
          />
          <FontAwesomeIcon
            onClick={toggleInputCheckHeader}
            style={{ fontSize: 32, cursor: "pointer", padding: "3px" }}
            icon={faXmark}
            size="xl"
          />
        </div>
      ) : (
        <div className={s.header_container}>
          <Link className={s.Link} to="/home">
            <div onClick={homeMenuNav} className={s.header_container_left}>
              <p>VASYA BLOG</p>
            </div>
          </Link>

          <div className={s.header_container_right}>
            <div className={s.header_container_right_icon_block_left}>
              <Link className={s.Link} to="#">
                <div
                  onClick={toggleInputCheckHeader}
                  style={{ marginRight: "15px" }}
                  className={s.icon}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  <span className={s.tooltiptext}> Поиск</span>
                </div>
              </Link>

              {window.localStorage.getItem("userId") ? (
                <>
                <Link className={s.Link} to="/create_post">
                    <div
                      onClick={createRecordMenuNav}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      <span className={s.tooltiptext}> Написать</span>
                    </div>
                  </Link>
                  <Link className={s.Link} to="/home">
                    <div
                      onClick={exiteProfileMenuNav}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faArrowRightToBracket} size="lg" />
                      <span className={s.tooltiptext}> Выйти</span>
                    </div>
                  </Link>
                  
                  </>
                
              ) : (
                <Link className={s.Link} to="/">
                  <div
                    onDoubleClick={() => closeMenuAutoReg()}
                    onClick={onClickToggleMenuAutoReg}
                    className={
                      (s.header_container_right_icon_block_right, s.icon)
                    }
                  >
                    <div className={s.icon}>
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      <span className={s.tooltiptext}>Войти</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
