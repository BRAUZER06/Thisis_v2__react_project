import React from "react";
import axios from "axios";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { instance } from "../../../config/axios";
import { useParams, Link } from "react-router-dom";
import Paginations from "./Paginations/Paginations";
import s from "./Section_right_All_Posts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const SectionRight = () => {
  const { id } = useParams();
  const [downloadPostSkeleton, setDownloadPostSkeleton] = React.useState(false);
  const [downloadPosts, setDownloadPosts] = React.useState([]);
  const [downloadPostsAllNumbers, setDownloadPostsAllNumbers] = React.useState(
    []
  );
  const [paginatePages, setPaginatePages] = React.useState(1);
  const inputValue = useSelector((state) => state.header.inputValue);

  const paginate = (e) => {
    setPaginatePages(Number(e));
  };

  React.useEffect(() => {
    const res = async () => {
      const resp = await instance
        .get(`/posts?page=${paginatePages}`)
        .then((respos) => {
          setDownloadPosts(respos.data.items);
          setDownloadPostsAllNumbers(respos.data.total);
        });
    };
    res();
  }, [paginatePages, inputValue]);

  const filterInputValue = downloadPosts.filter((value) => {
    return value.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const removeMyPostClickBtn = async (e) => {
    window.location.reload();
    const res = await instance.delete(`/posts/${e}`, {});
    res();
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
              className={classNames(s.content, {
                [s.content_active]:
                  window.location.pathname ===
                  `/check_post_and_comment/${e._id}`,
              })}
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
        <div className={s.container_pagination}>
          <Paginations
            paginate={paginate}
            totalPosts={downloadPostsAllNumbers}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
