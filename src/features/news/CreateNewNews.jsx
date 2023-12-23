//styles
import styles from "./CreateNewNews.module.css";
//components
import Button from "../../ui/Button";

//hooks
import React, { useState } from "react";
import { useUser } from "../authentication/useUser";
import { useCreateNews } from "./useCreateNews";

const CreateNewNews = () => {
  const { email } = useUser();

  const { createNews, isCreating } = useCreateNews();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, description, image, email };

    createNews(newPost);

    // setTitle("");
    // setDescription("");
    // setImage("");
  };

  return (
    <div className={styles["create-post"]}>
      <h2>Create New News</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />

        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={description}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImageUrlChange}
          required
        />

        <Button disabled={isCreating} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateNewNews;
