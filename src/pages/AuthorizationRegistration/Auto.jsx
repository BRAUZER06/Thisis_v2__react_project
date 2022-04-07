import React from "react";
import s from "./AutoRegis.module.scss";
import { useForm } from "react-hook-form";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { close_MenuAutoReg } from "../../redux/modal/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onClick_ToggleMenuAutoReg } from "../../redux/modal/action";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const Auto = ({ regAutoValueInput, regAutoFormGet }) => {
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
            <h2>Вход в аккаунт</h2>
            <FontAwesomeIcon
              onClick={closeMenuAutoReg}
              className={s.autorization_div_icon}
              icon={faXmark}
            />
          </div>
          <form
            className={s.autorization_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <p>Email</p>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 1,
                    message: "Минимум 1 символ",
                  },
                })}
                onChange={regAutoValueInput}
                type="text"
                name="email"
              />
            </label>
            <div className={s.error}>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>

            <label>
              <p>Пароль:</p>
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
              name="authorization"
              value="ва алейкум ассалам"
              className={s.input_submit}
              type="submit"
              disabled={!isValid}
            />
          </form>
          <Switch
            onClick={onClickToggleMenuAutoReg}
            {...label}
            defaultChecked
            color="warning"
          />
        </div>
      </div>
    </div>
  );
};

export default Auto;
