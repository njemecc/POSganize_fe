import React from "react";
import styles from "./NewsDetails.module.css";

const NewsDetails = () => {
  const post = {
    imageUrl:
      "https://nova.rs/wp-content/uploads/2023/11/19/1700421167-Tan2023-11-1920112216_4-750x500.jpg",
    title: "MMA championship",
    text: `Mixed martial arts (MMA)[a] is a full-contact combat sport based on striking, grappling and ground fighting, incorporating techniques from various combat sports from around the world.[10] The first documented use of the term mixed martial arts was in a review of UFC 1 by television critic Howard Rosenberg in 1993.[11]
  
        During the early 20th century, various interstylistic contests took place throughout Japan and in the countries of the East Asia. At the same time, in Brazil, there was a phenomenon called vale tudo, which became known for unrestricted fights between various styles such as judo/Brazilian jiu-jitsu, catch wrestling/luta livre, Muay Thai, and capoeira. Another precursor to modern MMA was the 1976 Ali vs. Inoki exhibition bout (which ended in a draw after 15 rounds), fought between boxer Muhammad Ali and wrestler Antonio Inoki in Japan, where it later inspired the foundation of Shooto in 1985, Pancrase in 1993, and the Pride Fighting Championships in 1997.
        
        In the 1990s, the Gracie family brought their Brazilian jiu-jitsu style, first developed in Brazil from the 1920s, to the United States – which culminated in the founding of the Ultimate Fighting Championship (UFC) promotion company in 1993. The company held an event with almost no rules, mostly due to the influence of Art Davie and Rorion Gracie attempting to replicate vale tudo fights that existed in Brazil[12] and would later implement a different set of rules (example: eliminating kicking a grounded opponent), which differed from other leagues which were more in favour of realistic, street like fights.[13]"`,
    createdAt: "2023-12-19",
    author: "John Doe",
  };

  const { title, description, image, createdAt, author } = post;

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
    </div>
  );
};

export default NewsDetails;
