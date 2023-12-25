//styles
import styles from "./RulesList.module.css";

//components
import SingleRule from "./SingleRule";

const RulesList = () => {
 

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
