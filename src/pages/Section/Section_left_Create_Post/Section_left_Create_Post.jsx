import React from "react";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import s from "./Section_left_Create_Post.module.scss";
import { SimpleMdeReact } from "react-simplemde-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Section_left_Create_Post = () => {
  const [valueInput, setInputValue] = React.useState({
    title: "",
    description: "",
    photoUrl: "",
    text: "",
  });

  const clickFormButton = async (e) => {
    try {
      const resp = await axios.post(
        "http://localhost:5656/posts",
        {
          title: valueInput.title,
          description: valueInput.description,
          photoUrl: valueInput.photoUrl,
          text: valueInput.text,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      alert("Не удалось отправить данные");
    }

    setInputValue({ title: "", description: "", photoUrl: "", text: "" });
    e.preventDefault();
  };

  const inputValueGet = (e, name) => {
    // SimpleMdeReact передает value только через событие 'e'(в этой функции), из-за этого такой фильтр.
    if (name === "text") {
      setInputValue({ ...valueInput, [name]: e });
    } else {
      setInputValue({ ...valueInput, [name]: e.target.value });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.container_content}>
        <form className={s.container_content_form}>
          <input
            className={s.container_content_form_input_1}
            type="text"
            placeholder="Введите заголовок..."
            value={valueInput.title}
            onChange={(e) => inputValueGet(e, "title")}
          />
          <div className={s.container_content_form_div_description}>
            <p>Короткое описание</p>
            <textarea
              className={s.container_content_form_input_2}
              type="text"
              value={valueInput.description}
              onChange={(e) => inputValueGet(e, "description")}
            />
          </div>
          <div className={s.container_content_form_div_img}>
            <p>Ссылка на изображение:</p>
            <div className={s.container_content_form_div_img_form}>
              <input
                className={s.container_content_form_input_3}
                type="text"
                value={valueInput.photoUrl}
                onChange={(e) => inputValueGet(e, "photoUrl")}
              />
              <button onClick={clickFormButton}>
                <i>
                  <FontAwesomeIcon
                    className={s.icon}
                    icon={faArrowUpFromBracket}
                  />
                </i>
                Загрузить
              </button>
            </div>
          </div>
          <div className={s.container_content_form_footer}>
            <p>Полное описание</p>
            <SimpleMdeReact
              value={valueInput.text}
              onChange={(e) => inputValueGet(e, "text")}
            />
            <div className={s.container_content_form_footer_div}>
              <button
                className={s.container_content_form_footer_div_btn1}
                onClick={clickFormButton}
              >
                Очистить
              </button>
              <button
                className={s.container_content_form_footer_div_btn2}
                onClick={clickFormButton}
              >
                Опубликовать
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section_left_Create_Post;
