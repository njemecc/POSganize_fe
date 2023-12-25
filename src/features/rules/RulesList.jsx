//styles
import styles from "./RulesList.module.css";

//components
import SingleRule from "./SingleRule";
import Spinner from "../../ui/Spinner";
//hooks
import { useGetRules } from "./useGetRules";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";
import { useState } from "react";
import Modal from "../../ui/Modal";
const RulesList = () => {

const {rules,isLoading} = useGetRules()
const {role} = useUser()
const [showCreate,setShowCreate] = useState(false)

if(isLoading) return <Spinner/>

  return (
    <div>
      <ul className={styles["rules-list-wrapper"]}>
        {rules?.map((rule) => (
          <SingleRule rule={rule} key={rule.id} />
        ))}
      </ul>
      {
        role === ADMIN && <Button onClick={() => {
          setShowCreate(true)
        }}>Create new</Button>

      }
      {
        showCreate &&  <Modal onClose={() => {
          setShowCreate(false)
        }}>
          <CreateRuleForm/>
        </Modal>
      }
      
    </div>
  );
};

export default RulesList;
