import React, { useEffect } from "react";
import s from "./Section_right_All_Posts.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import PostComment from "../Section_left_Post_Comment/Section_left_Post_Comment.jsx";
import { useParams, Link } from "react-router-dom";

const SectionRight = () => {
  const { id } = useParams();
  const [downloadPostSkeleton, setDownloadPostSkeleton] = React.useState(false)
  const [downloadPosts, setDownloadPosts] = React.useState([]);
  const inputValue = useSelector((state) => state.header.inputValue);

  useEffect(() => {
    const res = async () => {
      await axios
        .get("http://localhost:5656/posts")
        .then((respos) => setDownloadPosts(respos.data.items));
    };
    res();
  }, []); 

  

  const filterInputValue = downloadPosts.filter((value) => {
    return value.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const removeMyPostClickBtn = async (e) => {
    window.location.reload();

    (
      await axios.delete(`http://localhost:5656/posts/${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
    )();
  };

  return (
    <div>
      <div className={s.container}>
        {filterInputValue.map((e) => (
          <Link
            className={s.container_Link}
            to={`/check_post_and_comment/${e._id}`}
            key={e._id}
          >
            <div
            
              className={s.content}
              key={e._id}
            >
              <div className={s.container_div}>
                <h2 className={s.container_div_h2}>{e.title}</h2>
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
                    <FontAwesomeIcon
                      icon={faEye}
                      className={s.icon_color_black}
                    />
                    <span className={s.container_div_sub_div_span}>
                      {Math.floor(Math.random() * 101)}
                    </span>
                    {window.localStorage.getItem("userId") === e.user._id ? (
                      <>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className={
                            (s.container_div_sub_div_icon, s.icon_color_trash)
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
          </Link>
        ))}

        
      </div>
    </div>
  );
};

export default SectionRight;
