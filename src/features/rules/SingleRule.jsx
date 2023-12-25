//styles
import styles from "./SingleRule.module.css"
//components
import Heading from "../../ui/Heading"
import { Avatar } from "@mui/material"

const SingleRule = ({rule}) => {
 
  return (
    <li className={styles['single-rule']}>   <Avatar alt="Remy Sharp" src={rule.image} /> <Heading as="h1">{rule.description}</Heading> </li>
  )
}

export default SingleRule
