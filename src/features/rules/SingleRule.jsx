//styles
import styles from "./SingleRule.module.css"
//components
import Heading from "../../ui/Heading"


const SingleRule = ({rule}) => {
  
  return (
    <li className={styles['single-rule']}> <Heading as="h1">{rule.text}</Heading> </li>
  )
}

export default SingleRule
