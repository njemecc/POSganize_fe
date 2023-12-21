import styles from "./AllNews.module.css";
//components
import SingleNews from "./SingleNews";
const AllNews = () => {
  const dummyPosts = [
    {
      image:
        "https://evrsac.rs/wp-content/uploads/2023/05/343669185-930139758296390-3864584449365677994-n.jpg",
      title: "MMA championship",
      description: `Mixed martial arts (MMA)[a] is a full-contact combat sport based on striking, grappling and ground fighting, incorporating techniques from various combat sports from around the world.[10] The first documented use of the term mixed martial arts was in a review of UFC 1 by television critic Howard Rosenberg in 1993.[11]

      During the early 20th century, various interstylistic contests took place throughout Japan and in the countries of the East Asia. At the same time, in Brazil, there was a phenomenon called vale tudo, which became known for unrestricted fights between various styles such as judo/Brazilian jiu-jitsu, catch wrestling/luta livre, Muay Thai, and capoeira. Another precursor to modern MMA was the 1976 Ali vs. Inoki exhibition bout (which ended in a draw after 15 rounds), fought between boxer Muhammad Ali and wrestler Antonio Inoki in Japan, where it later inspired the foundation of Shooto in 1985, Pancrase in 1993, and the Pride Fighting Championships in 1997.
      
      In the 1990s, the Gracie family brought their Brazilian jiu-jitsu style, first developed in Brazil from the 1920s, to the United States – which culminated in the founding of the Ultimate Fighting Championship (UFC) promotion company in 1993. The company held an event with almost no rules, mostly due to the influence of Art Davie and Rorion Gracie attempting to replicate vale tudo fights that existed in Brazil[12] and would later implement a different set of rules (example: eliminating kicking a grounded opponent), which differed from other leagues which were more in favour of realistic, street like fights.[13]"`,
      createdAt: "2023-12-19",
      author: "John Doe",
      id: "1",
    },
    {
      image:
        "https://nova.rs/wp-content/uploads/2023/11/19/1700421167-Tan2023-11-1920112216_4-750x500.jpg",
      title: "Djokovic ostvario neverovatan rezultat",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam dolore dolores consectetur molestiae quasi, ullam esse, at ipsa ducimus eos eum nulla et illo, id quos impedit maxime? Ad doloremque culpa consectetur atque odit non! Nihil aspernatur magnam eaque, facilis iste consectetur cumque officiis omnis cum esse quas minima maiores, dolore sequi accusamus expedita ex, a quod non labore autem sit recusandae! At quas eius fugiat et id, illum quis odio eligendi veritatis facilis nemo deserunt provident vitae aliquid pariatur corporis ut laboriosam maiores quae consequuntur quibusdam. Quaerat quisquam ex recusandae aut expedita, dignissimos odit magnam reprehenderit sit qui animi reiciendis sed ipsam harum illo iure asperiores perferendis voluptatem eaque culpa repellat autem eum. Alias expedita quos delectus labore, at deleniti, optio numquam, voluptate necessitatibus quasi ullam rem porro consequuntur ducimus corporis amet temporibus! Voluptatem a aut quam saepe tenetur nulla pariatur tempore excepturi sunt, molestiae, quisquam inventore eaque voluptates in provident veritatis nisi expedita id dolor. Enim ducimus ad sint placeat unde excepturi id tempora. Itaque possimus autem ea ducimus consequatur amet unde, non ab, explicabo tempora voluptatibus perferendis modi sapiente, quia doloribus nulla? Esse ad autem qui aspernatur, quia expedita quo ab sapiente, voluptatum itaque architecto sequi! Quisquam sapiente odit illum alias, debitis fuga nisi nesciunt neque, porro consequuntur voluptate, accusamus culpa a est obcaecati excepturi consectetur doloribus voluptas. Voluptates, dolorem ex tenetur ducimus dicta possimus praesentium eius non iusto eaque labore vitae velit maiores, soluta fugiat placeat excepturi autem quia a dignissimos rerum harum repellat. Odit nisi id delectus, velit earum atque deserunt tempore fugiat totam, minima suscipit, voluptatum quas hic quaerat aliquam inventore doloremque sed molestiae. Eaque optio error enim distinctio delectus accusamus aut veniam minima inventore suscipit saepe ipsa autem assumenda debitis molestiae corrupti, at quisquam, explicabo odio beatae omnis? Eaque tempora iure possimus?",
      createdAt: "2023-12-18",
      author: "Jane Smith",
      id: "2",
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
