//styles
import styles from "./RulesList.module.css";

//components
import SingleRule from "./SingleRule";
import Spinner from "../../ui/Spinner";
//hooks
import { useGetRules } from "./useGetRules";

const RulesList = () => {

const {rules,isLoading} = useGetRules()

if(isLoading) return <Spinner/>

  return (
    <div>
      <ul className={styles["rules-list-wrapper"]}>
        {rules?.map((rule) => (
          <SingleRule rule={rule} key={rule.id} />
        ))}
      </ul>
    </div>
  );
};

export default RulesList;
