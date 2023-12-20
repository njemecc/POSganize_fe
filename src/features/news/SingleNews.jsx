import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SingleNews.module.css";

const SingleNews = ({ post }) => {
  const { imageUrl, title, author, created_at, text, id } = post;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/news/${id}`)}
      className={styles["single-post"]}
    >
      <div className={styles["image"]}>
        <img src={imageUrl} alt="News" />
      </div>
      <div className={styles["content"]}>
        <h2>{title}</h2>
        <p className={styles["details"]}>
          <span>{author}</span> - <span>{created_at}</span>
        </p>
        <p className={styles["summary"]}>{text.substring(0, 300)}...</p>
      </div>
    </div>
  );
};

export default SingleNews;