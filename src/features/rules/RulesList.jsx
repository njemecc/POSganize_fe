//styles
import styles from "./RulesList.module.css";

//components
import SingleRule from "./SingleRule";

const RulesList = () => {
  const dummyRules = [
    {
      id: "1",
      text: "Always be on time!",
    },
    {
      id: "2",
      text: "Be respectfull with your friends.",
    },
    {
      id: "3",
      text: "Pay the membership before 10th in the month.",
    },
    {
      id: "4",
      text: "You need to be consistent to go to the championships.",
    },
  ];

  return (
    <div>
      <ul className={styles["rules-list-wrapper"]}>
        {dummyRules.map((rule) => (
          <SingleRule rule={rule} key={rule.id} />
        ))}
      </ul>
    </div>
  );
};

export default RulesList;
