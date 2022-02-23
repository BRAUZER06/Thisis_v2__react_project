import React from "react";
import s from "./Section_left_MyInformation.module.scss";
import photo from '../../../img/Pupkin_photo.png'

const SectionLeft = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.container_block}>
          <div className={s.container_block_name}>
            <h1>Vasya Pupkin</h1>
            <p>Блог фронтенд-разработчика</p>
          </div>
          <div className={s.container_block_photo}>
            <img src={photo} />
          </div>
          <div className={s.container_block_about_me}>
            <h2>Обо мне</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque diam arcu risus. Imperdiet dolor, porttitor
              pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc
              suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed
              porta ac enim. Mattis quam accumsan ipsum commodo sed purus mi.
              Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra
              viverra quis mattis tincidunt laoreet amet, laoreet proin. Duis
              mi, aliquam tincidunt amet phasellus malesuada non nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLeft;
