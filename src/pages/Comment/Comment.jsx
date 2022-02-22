import React from "react";
import s from "./Comment.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Comment = () => {
  const { id } = useParams();
  const [textareaValue, setTextAreatValue] = React.useState("");
  const [getCommentAllAxios, setGetCommentAllAxios] = React.useState([]);
  const [getPostChecked, setGetPostChecked] = React.useState({});

  useEffect(async () => {
    try {
      const resp = await axios
        .get(`http://localhost:5656/posts/${id}`)
        .then((resposn) => setGetPostChecked(resposn.data));
    } catch (error) {
      alert("Не удалось получить пост");
    }
  }, [id]);

  useEffect(async () => {
    try {
      const resp = await axios
      .get("http://localhost:5656/comments")
      .then((respons) => {
        setGetCommentAllAxios(respons.data.items);
      });
    } catch (error) {
      alert('Не удалось получить комментарий')
    }
    
  }, []);

  const onClickButtonInputForm = async () => {
    window.location.reload();
    const res = await axios.post(
      "http://localhost:5656/comments",
      {
        text: textareaValue,
        postId: id,
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      }
    );
  };

  const onChangeValueInput = (e) => {
    setTextAreatValue(e.target.value);
  };


  return (
    <div className={s.container}>
      <div className={s.container_photo}>
        <img src={getPostChecked.photoUrl} alt="Фотки нэт" />
      </div>
      <div className={s.container_up}>
        <div className={s.container_up_div_1}>
          <p className={s.container_up_div_1_p1}>
            {new Date(getPostChecked.createdAt).toLocaleString("ru", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
          <FontAwesomeIcon className={s.container_up_div_1_icon} icon={faEye} />
          <p className={s.container_up_div_1_p2}>55</p>
        </div>
        <div className={s.container_up_div_2}>
          <h1 className={s.container_up_div_2_h1}>{getPostChecked.title}</h1>
          <p className={s.container_up_div_2_p}>{getPostChecked.description}</p>
        </div>
      </div>

      <div className={s.container_down}>
        <p className={s.container_down_text_1}>{getPostChecked.text}</p>

      </div>

      <div className={s.container_comment}>
        <h2>
          Комментарии (
          {getCommentAllAxios.filter((item) => item.post === id).length})
        </h2>
        {getCommentAllAxios
          .filter((item) => item.post === id)
          .map((e, i) => (
            <div key={e._id} className={s.container_comment_content}>
              <div className={s.container_comment_content_div}>
                <p className={s.container_comment_content_div_name}>
                  {e.user.fullName}
                </p>
                <p className={s.container_comment_content_div_data}>
                  {new Date(e.createdAt).toLocaleString("ru", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
              </div>
              <p className={s.container_comment_content_footer_text}>
                {e.text}
              </p>
            </div>
          ))}
      </div>
      <div className={s.container_comment_input}>
        <h2>Добавить комментарий</h2>
        <textarea
          onChange={onChangeValueInput}
          value={textareaValue}
        ></textarea>
        <button onClick={onClickButtonInputForm}>Отправить</button>
      </div>
    </div>
  );
};

export default Comment;
