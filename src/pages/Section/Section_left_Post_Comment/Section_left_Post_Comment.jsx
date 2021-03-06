import React from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../../config/axios";
import s from "./Section_left_Post_Comment.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostComment = () => {
  const { id } = useParams();
  const [textareaValue, setTextAreatValue] = React.useState("");
  const [getCommentAllAxios, setGetCommentAllAxios] = React.useState([]);
  const [getPostChecked, setGetPostChecked] = React.useState({});
  const [noImges, setNoImages] = React.useState(false);

  React.useEffect(
    (async () => {
      try {
        const resp = await instance.get("/comments").then((respons) => {
          setGetCommentAllAxios(respons.data.items);
        });
      } catch (error) {
        alert("Не удалось получить комментарий");
      }
    })(),
    []
  );

  React.useEffect(
    (async () => {
      try {
        const resp = await instance
          .get(`/posts/${id}`)
          .then((resposn) => setGetPostChecked(resposn.data));
      } catch (error) {
        alert("Не удалось получить пост");
      }
      noImg();
    })(),
    [id]
  );

  const onClickButtonInputForm = async () => {
    window.location.reload();
    const res = await instance.post("/comments", {
      text: textareaValue,
      postId: id,
    });
  };

  const noImg = () => {
    if (getPostChecked.photoUrl.indexOf("http") === 0) {
      setNoImages(false);
    } else {
      setNoImages(true);
    }
  };

  const onChangeValueInput = (e) => {
    setTextAreatValue(e.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.container_photo}>
        <img
          onClick={(e) => console.log(e)}
          src={
            noImges
              ? "https://brilliant24.ru/files/cat/template_01.png"
              : getPostChecked.photoUrl
          }
          alt="Фотки нэт"
        />
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

export default PostComment;
