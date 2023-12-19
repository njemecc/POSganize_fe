import styles from "./AllNews.module.css";
//components
import SingleNews from "./SingleNews";
const AllNews = () => {
  const dummyPosts = [
    {
      imageUrl:
        "https://evrsac.rs/wp-content/uploads/2023/05/343669185-930139758296390-3864584449365677994-n.jpg",
      title: "MMA championship",
      text: `Mixed martial arts (MMA)[a] is a full-contact combat sport based on striking, grappling and ground fighting, incorporating techniques from various combat sports from around the world.[10] The first documented use of the term mixed martial arts was in a review of UFC 1 by television critic Howard Rosenberg in 1993.[11]

      During the early 20th century, various interstylistic contests took place throughout Japan and in the countries of the East Asia. At the same time, in Brazil, there was a phenomenon called vale tudo, which became known for unrestricted fights between various styles such as judo/Brazilian jiu-jitsu, catch wrestling/luta livre, Muay Thai, and capoeira. Another precursor to modern MMA was the 1976 Ali vs. Inoki exhibition bout (which ended in a draw after 15 rounds), fought between boxer Muhammad Ali and wrestler Antonio Inoki in Japan, where it later inspired the foundation of Shooto in 1985, Pancrase in 1993, and the Pride Fighting Championships in 1997.
      
      In the 1990s, the Gracie family brought their Brazilian jiu-jitsu style, first developed in Brazil from the 1920s, to the United States – which culminated in the founding of the Ultimate Fighting Championship (UFC) promotion company in 1993. The company held an event with almost no rules, mostly due to the influence of Art Davie and Rorion Gracie attempting to replicate vale tudo fights that existed in Brazil[12] and would later implement a different set of rules (example: eliminating kicking a grounded opponent), which differed from other leagues which were more in favour of realistic, street like fights.[13]"`,
      created_at: "2023-12-19",
      author: "John Doe",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Drugi post",
      text: "Ovo je tekst drugog posta.",
      created_at: "2023-12-18",
      author: "Jane Smith",
    },
  ];

  return (
    <div className={styles["all-posts"]}>
      {dummyPosts.map((post, index) => (
        <SingleNews key={index} post={post} />
      ))}
    </div>
  );
};

export default AllNews;
