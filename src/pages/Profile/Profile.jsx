import React from "react";
import s from "./Profilse.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const inputValue = useSelector((state) => state.header.inputValue);
  const [downloadPosts, setDownloadPosts] = React.useState([]);
  const [downloadComments, setDownloadComments] = React.useState([]);
  const [filterStatPostslCommens, setFilterStatPostsCommens] =
    React.useState(true);
  //сделать компонент из постов и комментов
  // сделать одну функцию
  const filterInputValuePost = downloadPosts.filter((value) => {
    return value.title.toLowerCase().includes(inputValue.toLowerCase());
  });
  const filterInputValueComment = downloadComments.filter((value) => {
    return value.text.toLowerCase().includes(inputValue.toLowerCase());
  });
 
  useEffect(() => {
    try {
      (async () => {
        await axios
          .get("http://localhost:5656/posts")
          .then((respos) => setDownloadPosts(respos.data.items));
      })();
    } catch (error) {
      alert("не удалось получить посты ");
    }
    try {
      (async () => {
        await axios
          .get("http://localhost:5656/comments")
          .then((respos) => setDownloadComments(respos.data.items));
      })();
    } catch (error) {
      alert("не удалось получить комментарии");
    }
  }, []);

  const removeMyPostClickBtn = async (e) => {
    try {
      (
        await axios.delete(`http://localhost:5656/posts/${e}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
      )();
    } catch (error) {
      alert("Не удалось удалить пост");
    } finally {
      window.location.reload();
    }
  };

  const removeMyCommentClickBtn = async (e) => {
    //Исправить ошибку:  перекидывает в catch  даже если не было выявлено ощибок в try, также перезагрузка стр при удалении комма и пеебрасывание в категорию статьи а не коммы где ты и изначально находился

    try {
      (
        await axios.delete(`http://localhost:5656/comments/${e}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
      )();
    } catch (error) {
      alert("не удалось удалить комментарий ");
    } finally {
      window.location.reload();
    }
  };

  const onClickToggleCommentPost = (e) => {
    if (e.target.innerText === "Комментарии") {
      setFilterStatPostsCommens(false);
    } else if (e.target.innerText === "Статьи") {
      setFilterStatPostsCommens(true);
    }
  };

  return (
    <div className={s.profile}>
      <Link className={s.Link} to="/home">
        <p className={s.profile_p}>VASYA BLOG</p>
      </Link>

      <div className={s.container}>
        <p className={s.container_name}>
          {window.localStorage.getItem("fullName")}
        </p>
        <p className={s.container_data}>
          Дата регистрации:<strong>12 августа 2019 в 08:06</strong>
        </p>

        <hr />

        <div className={s.container_content}>
          <p
            name="comment"
            onClick={onClickToggleCommentPost}
            className={
              filterStatPostslCommens ? s.container_content_active_hover : {}
            }
          >
            Статьи
          </p>
          <p
            name="statya"
            onClick={onClickToggleCommentPost}
            className={
              filterStatPostslCommens ? {} : s.container_content_active_hover
            }
          >
            Комментарии
          </p>
        </div>

        {filterStatPostslCommens
          ? filterInputValuePost
              .filter(
                (item) =>
                  item.user._id === window.localStorage.getItem("userId")
              )
              .map((e) => (
                <div className={s.content} key={e._id}>
                  <div className={s.container_div}>
                    <Link
                      className={s.container_Link}
                      to={`/check_post_and_comment/${e._id}`}
                      key={e._id}
                    >
                      <h2 className={s.container_div_h2}>{e.title}</h2>

                      <p className={s.container_div_p}>{e.description}</p>
                    </Link>
                    <div className={s.container_div_sub}>
                      <p className={s.container_div_sub_p}>
                        {new Date(e.createdAt).toLocaleString("ru", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                        })}
                      </p>
                      <div className={s.container_div_sub_div}>
                        <FontAwesomeIcon icon={faEye} />
                        <span className={s.container_div_sub_div_span}>
                          {Math.floor(Math.random() * 101)}
                        </span>
                        {window.localStorage.getItem("userId") ===
                        e.user._id ? (
                          <>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className={
                                (s.container_div_sub_div_icon,
                                s.icon_color_trash)
                              }
                              onClick={() => removeMyPostClickBtn(e._id)}
                            />
                            <Link to={`/redact_post/${e._id}`}>
                              <FontAwesomeIcon
                                className={
                                  (s.container_div_sub_div_icon,
                                  s.icon_color_trash,
                                  s.Pan_To_Square)
                                }
                                icon={faPenToSquare}
                              />
                            </Link>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className={s.content_photo}
                      src={e.photoUrl}
                      alt="Фотки нэт"
                    />
                  </div>
                </div>
              ))
          : filterInputValueComment
              .filter(
                (item, index) =>
                  item.user._id === window.localStorage.getItem("userId")
              )
              .map((e) => (
                <div className={s.content} key={e._id}>
                  <div className={s.container_div}>
                    <h2 className={s.container_div_h2}>{e.text}</h2>
                    <p className={s.container_div_p}>{e.description}</p>
                    <div className={s.container_div_sub}>
                      <p className={s.container_div_sub_p}>
                        {new Date(e.createdAt).toLocaleString("ru", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                        })}
                      </p>
                      <div className={s.container_div_sub_div}>
                        <FontAwesomeIcon icon={faEye} />
                        <span className={s.container_div_sub_div_span}>
                          {Math.floor(Math.random() * 101)}
                        </span>
                        {window.localStorage.getItem("userId") ===
                        e.user._id ? (
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className={
                              (s.container_div_sub_div_icon, s.icon_color_trash)
                            }
                            onClick={() => removeMyCommentClickBtn(e._id)}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className={s.content_photo}
                      src={e.photoUrl}
                      alt="Фотки нэт"
                    />
                  </div>
                </div>
              ))}

        {/* 
        <div className={s.content}>
          <div className={s.container_div}>
            <h2 className={s.container_div_h2}>
              Amet molestie tincidunt id nascetur sit purus turpis
            </h2>
            <p className={s.container_div_p}>
              Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis
              ultrices suspendisse scelerisque quam lorem. Amet molestie
              nascetur...
            </p>
            <div className={s.container_div_sub}>
              <p className={s.container_div_sub_p}>12 августа 2019 в 08:06</p>
              <div className={s.container_div_sub_div}>
                <FontAwesomeIcon icon={faEye} />
                <span className={s.container_div_sub_div_span}>301</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.content}>
          <div className={s.container_div}>
            <h2 className={s.container_div_h2}>
              Какой-то очень интересный заголовок
            </h2>
            <p className={s.container_div_p}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className={s.container_div_sub}>
              <p className={s.container_div_sub_p}>12 августа 2019 в 08:06</p>
              <div className={s.container_div_sub_div}>
                <FontAwesomeIcon icon={faEye} />
                <span className={s.container_div_sub_div_span}>301</span>
              </div>
            </div>
          </div>
          <div>
            <img className={s.content_photo} src={photo} />
          </div>
        </div>
        <div className={s.content}>
          <div className={s.container_div}>
            <h2 className={s.container_div_h2}>
              Какой-то очень интересный заголовок
            </h2>
            <p className={s.container_div_p}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className={s.container_div_sub}>
              <p className={s.container_div_sub_p}>12 августа 2019 в 08:06</p>
              <div className={s.container_div_sub_div}>
                <FontAwesomeIcon icon={faEye} />
                <span className={s.container_div_sub_div_span}>301</span>
              </div>
            </div>
          </div>
          <div>
            <img className={s.content_photo} src={photo} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
