import React from "react";
import { Link } from "react-router-dom";
import s from "./AutoRegis.module.scss";
import { useForm } from "react-hook-form";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { close_MenuAutoReg } from "../../redux/modal/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onClick_ToggleMenuAutoReg } from "../../redux/modal/action";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";


const Regist = ({ regAutoValueInput, regAutoFormGet }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useDispatch();

  //закрытие меню
  const closeMenuAutoReg = () => {
    dispatch(close_MenuAutoReg());
  };
  //переключатель с Авториз на Регист
  const onClickToggleMenuAutoReg = () => {
    dispatch(onClick_ToggleMenuAutoReg());
  };
 
  //React-Hook-Form
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.autorization}>
          <div className={s.autorization_div}>
            <h2>Регистрация</h2>
            <Link className={s.Link} to="home">
              <FontAwesomeIcon
                onClick={closeMenuAutoReg}
                icon={faXmark}
                className={s.autorization_div_icon}
              />
            </Link>
          </div>
          <form
            className={s.autorization_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <p> Имя и фамилия:</p>
              <input
                {...register("fullName", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 32,
                    message: "Слишком много символов",
                  },
                })}
                onChange={regAutoValueInput}
                name="fullName"
                type="text"
              />
            </label>
            <div className={s.error}>
              {errors?.fullName && (
                <p>{errors?.fullName?.message || "Error!"}</p>
              )}
            </div>

            <label>
              <p>Email:</p>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 1,
                    message: "Минимум 1 символ",
                  },
                })}
                onChange={regAutoValueInput}
                name="email"
                type="text"
              />
            </label>
            <div className={s.error}>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>

            <label>
              <p>Пароль</p>
              <input
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 64,
                    message: "Слишком много символов",
                  },
                })}
                onChange={regAutoValueInput}
                name="password"
                type="text"
              />
            </label>
            <div className={s.error}>
              {errors?.password && (
                <p>{errors?.password?.message || "Error!"}</p>
              )}
            </div>

            <input
              onClick={regAutoFormGet}
              name="registration"
              value="салам алейкум"
              className={s.input_submit}
              type="submit"
              disabled={!isValid}
            />
          </form>
          <Switch
            onClick={onClickToggleMenuAutoReg}
            {...label}
            color="warning"
          />
        </div>
      </div>
    </div>
  );
};

export default Regist;
