import Button from "../../ui/Button";
import React, { useState } from "react";
import styles from "./CreateNewNews.module.css";

const CreateNewNews = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, text, imageUrl };
    console.log("Novi post:", newPost);

    setTitle("");
    setText("");
    setImageUrl("");
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
        <textarea id="text" value={text} onChange={handleTextChange} required />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />

        <Button>Create</Button>
      </form>
    </div>
  );
};

export default CreateNewNews;
