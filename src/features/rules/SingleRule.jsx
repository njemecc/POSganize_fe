//styles
import styles from "./SingleRule.module.css";

//icons
import { HiTrash } from "react-icons/hi2";

//components
import Heading from "../../ui/Heading";
import { Avatar } from "@mui/material";
import Menus from "../../ui/Menus";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const SingleRule = ({ rule, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [whatModal, setWhatModal] = useState(rule.id);

  return (
    <li className={styles["single-rule"]}>
      {" "}
      <div className={styles["display-flex"]}>
        <Avatar alt="Remy Sharp" src={rule.image} />{" "}
        <Heading as="h1">{rule.description}</Heading>{" "}
      </div>
      <Menus.Menu>
        <Menus.Toggle id={rule.id} />
        <Menus.List id={rule.id}>
          <Menus.Button
            onClick={() => {
            setShowDelete(true)
              setWhatModal(rule.id);
            }}
          >
            <HiTrash />
            Delete
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
      {showDelete && whatModal === rule.id ? (
        <Modal onClose={() => setShowDelete(false)}>
          <ConfirmDelete
            onConfirm={() => deleteRule(rule.id)}
            disabled={isDeleting}
            closeModal={() => setShowDelete(false)}
          />
        </Modal>
      ) : (
        ""
      )}
    </li>
  );
};

export default SingleRule;
