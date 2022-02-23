import React from "react";
import s from "./Nav.module.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faCaretDown,
  faHouse,
  faGear, 
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle_MenuNav,
  home_MenuNav,
  myProfile_MenuNav,
  createRecord_MenuNav,
  exiteProfile_MenuNav,
  closed_MenuNav,
} from "../../redux/sidebar/action";

const Nav = () => {
  const dispatch = useDispatch();

  // реализовать анимированное открытие категорий
  const {
    openSideBar,
    openHomeMenu,
    openMyProfile,
    createRecord,
    exiteMyProfileconst,
  } = useSelector((state) => state.sideBar);

  const fullName = window.localStorage.getItem("fullName");
  const createdAt = window.localStorage.getItem("createdAt");

  const toggleMenuNav = () => {
    dispatch(toggle_MenuNav());
  };
  const homeMenuNav = () => {
    dispatch(home_MenuNav());
  };
  const myProfileMenuNav = () => {
    dispatch(myProfile_MenuNav());
  };
  const createRecordMenuNav = () => {
    dispatch(createRecord_MenuNav());
  };
  const exiteProfileMenuNav = () => {
    dispatch(toggle_MenuNav());
    dispatch(exiteProfile_MenuNav());
    localStorage.clear();
  };
  const closedMenuNav = () => {
    dispatch(closed_MenuNav());
  };

  return (
    <div
      onDoubleClick={toggleMenuNav}
      style={openSideBar ? {} : { width: "70px " }}
      className={s.container}
    >
      
      {      // Переделать под массив
      openSideBar ? (
        <div className={s.content}>
          <div
            className={s.container_block}
            style={openSideBar ? { display: "block" } : { display: "none" }}
          >
            <div className={s.container_block_thisis}>
              <Link to="/home">
                <p>THISIS</p>
              </Link>
            </div>
            <div className={s.container_block_avatar}>
              <img src="https://www.meme-arsenal.com/memes/5abed9f3164164ba88734fab701f2b14.jpg" />
            </div>
            <div className={s.container_block_name}>
              <p>{fullName}</p>
              <div className={s.container_block_name_icon}>
                <Link className={s.container_block_name_icon} to="/home">
                  <div
                    onClick={homeMenuNav}
                    style={{ marginRight: "10px" }}
                    className={s.icon}
                  >
                    <FontAwesomeIcon icon={faHouse} size="lg" />
                    <span className={s.tooltiptext}> ЫыЫ</span>
                  </div>
                </Link>
                {window.localStorage.getItem("userId") ? (
                  <Link className={s.container_block_name_icon} to="/profile">
                    <div
                      onClick={myProfileMenuNav}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      <span className={s.tooltiptext}> Профиль</span>
                    </div>
                  </Link>
                ) : null}

                <Link className={s.container_block_name_icon} to="/home">
                  <div style={{ marginRight: "10px" }} className={s.icon}>
                    <FontAwesomeIcon icon={faGear} size="lg" />
                    <span className={s.tooltiptext}>Настройки</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className={s.container_block_nav}>
              <div onClick={homeMenuNav} className={s.container_block_nav_text}>
                <Link className={s.Link} to="/home">
                  <p>Home</p>
                </Link>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {window.localStorage.getItem("userId") ? (
                <>
                  <div
                    onClick={myProfileMenuNav}
                    className={s.container_block_nav_text}
                  >
                    <Link className={s.Link} to="/profile">
                      <p> My profile</p>
                    </Link>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div
                    onClick={createRecordMenuNav}
                    className={s.container_block_nav_text}
                  >
                    <Link className={s.Link} to="/create_post">
                      <p> Сreate post</p>
                    </Link>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div
                    onClick={exiteProfileMenuNav}
                    className={s.container_block_nav_text}
                  >
                    <Link className={s.Link} to="/home">
                      <p>Exit</p>
                    </Link>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className={s.container_block_footer}>
            <div className={s.container_block_footer_data}>
              <p>
                {window.localStorage.getItem("createdAt")
                  ? `Дата регистрации: ${new Date(
                      window.localStorage.getItem("createdAt")
                    ).toLocaleString("ru", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}`
                  : null}
              </p>
            </div>
            <div
              onClick={closedMenuNav}
              className={s.container_block_footer_icon_menu}
            >
              <div style={{ marginRight: "10px" }} className={s.icon}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </div>
              <p>Меню</p>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default Nav;
