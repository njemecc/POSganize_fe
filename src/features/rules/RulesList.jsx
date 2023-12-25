//styles
import styles from "./RulesList.module.css";

//constants
import { ADMIN } from "../../utils/roles";

//components
import SingleRule from "./SingleRule";
import Spinner from "../../ui/Spinner";
import CreateRuleForm from "./CreateRuleForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
//hooks
import { useGetRules } from "./useGetRules";
import { useUser } from "../authentication/useUser";
import { useState } from "react";
import Menus from "../../ui/Menus";

const RulesList = () => {
  const { rules, isLoading } = useGetRules();
  const { role } = useUser();
  const [showCreate, setShowCreate] = useState(false);



  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <div>
        <ul className={styles["rules-list-wrapper"]}>
          {rules?.map((rule) => (
            <SingleRule
              rule={rule}
              key={rule.id}
            />
          ))}
        </ul>
        {role === ADMIN && (
          <Button
            onClick={() => {
              setShowCreate(true);
            }}
          >
            Create new
          </Button>
        )}
        {showCreate && (
          <Modal
            onClose={() => {
              setShowCreate(false);
            }}
          >
            <CreateRuleForm
              onClose={() => {
                setShowCreate(false);
              }}
            />
          </Modal>
        )}


      </div>
    </Menus>
  );
};

export default RulesList;
