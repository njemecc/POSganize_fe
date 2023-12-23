import Button from "../../ui/Button";
import React from "react";
import Spinner from "../../ui/Spinner";
import styles from "./NewsDetails.module.css";
import { useGetNewsById } from "./useGetNewsById";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const NewsDetails = () => {
  const { news, loadingNews } = useGetNewsById();
  const [showDelete, setShowDelete] = useState(false);

  if (loadingNews) return <Spinner />;

  const { title, description, image, createdAt, author } = news;

  return (
    <div className={styles["blog-details"]}>
      <div className={styles["post-header"]}>
        <h2>{title}</h2>
        <p className={styles["details"]}>
          <span>{author}</span> - <span>{createdAt}</span>
        </p>
      </div>
      <div className={styles["post-content"]}>
        <img src={image} alt="Blog Post" />
        <p className={styles["description"]}>{description}</p>
      </div>
      <Button onClick={() => setShowDelete(true)} variation="danger">
        Delete
      </Button>
      {showDelete && (
        <Modal onClose={() => setShowDelete(false)}>
          <ConfirmDelete closeModal={() => setShowDelete(false)} />
        </Modal>
      )}
    </div>
  );
};

export default NewsDetails;
