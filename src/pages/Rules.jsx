import Heading from "../ui/Heading";

//icons
import { MdWatchLater } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import RulesList from "../features/rules/RulesList";






const Rules = () => {
  return <>
  <Heading as="h0">Club Rules</Heading>
  <RulesList/>
 </>
};

export default Rules;
