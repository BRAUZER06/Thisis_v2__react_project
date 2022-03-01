import React from "react";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import s from "./RedactPost.module.scss";
import { SimpleMdeReact } from "react-simplemde-editor";
import { useNavigate, useParams } from "react-router-dom";



const RedactPost = () => {


  
  const { id } = useParams();
  const navigation = useNavigate();
  const [valueInput, setInputValue] = React.useState({
    title: "",
    text: "",
  });





 

  const inputValueOnChangeGet = (e, name) => {
    // SimpleMdeReact передает value только через событие 'e'(в этой функции), из-за этого такой фильтр.
    if (name === "text") {
      setInputValue({ ...valueInput, [name]: e });
    } else {
      setInputValue({ ...valueInput, [name]: e.target.value });
    }
  };





  React.useEffect(async () => {
    try {
      const res = await axios
        .get(`http://localhost:5656/posts/${id}`)
        .then((respos) => setInputValue(respos.data));
    } catch (error) {
      alert("Ошибка при получении данных ");
    }
  }, []);





  const clickPostDeleted = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:5656/posts/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      navigation("/home");
    } catch (error) {
      if (prompt("Временные проблемы, перенаправить на главную страницу ?")) {
        navigation("/home");
      }
      alert("Проблемы с удалением");
    }
  };





  const clickFormButton = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `http://localhost:5656/posts/${id}`,
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
      navigation("/home");
    } catch (error) {
      alert("Вы ввели некорректные данные ");
    }
  };









  
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.container_content}>
          <form className={s.container_content_form}>
            <p className={s.container_content_form_p}>Главное</p>
            <div className={s.container_content_form_hr}></div>
            <input
              autoFocus={true}
              className={s.container_content_form_input_1}
              type="text"
              placeholder="Введите заголовок..."
              value={valueInput.title}
              onChange={(e) => inputValueOnChangeGet(e, "title")}
            />
            <div className={s.container_content_form_footer}>
              <p>Полное описание</p>
              <SimpleMdeReact
                value={valueInput.text}
                onChange={(e) => inputValueOnChangeGet(e, "text")}
              />
              <div className={s.container_content_form_footer_div}>
                <button
                  className={s.container_content_form_footer_div_btn1}
                  onClick={clickPostDeleted}
                >
                  Удалить
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
    </div>
  );
};

export default RedactPost;
