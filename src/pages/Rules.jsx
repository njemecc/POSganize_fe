import Heading from "../ui/Heading";

//icons
import { MdWatchLater } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";






const Rules = () => {
  return <>
  <Heading as="h0">Club Rules</Heading>
  <ul style={{width:"80%",margin:"5rem auto", display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center", padding:"40px",backgroundColor:"#f9f9f9",borderRadius:"8px",boxShadow:" 0 0 10px rgba(0, 0, 0, 0.1)"}}>
    <li style={{width:"100%",display:"flex",alignItems:"center",gap:"1rem"}}><MdWatchLater style={{color:"orange",fontSize:"2rem"}}/> <Heading as="h1">  Always be on time!</Heading></li>
    <li style={{width:"100%",display:"flex",alignItems:"center",gap:"1rem"}}> <GiThreeFriends style={{color:"blue",fontSize:"2rem"}} /><Heading as="h1">Be respectfull with your friends.</Heading> </li>
    <li style={{width:"100%",display:"flex",alignItems:"center",gap:"1rem"}}> <FaMoneyBillWave style={{color:"green",fontSize:"2rem"}}/> <Heading as="h1">Pay the membership before 10th in the month.</Heading></li>
    <li style={{width:"100%",display:"flex",alignItems:"center",gap:"1rem"}}> <GiChampions style={{fontSize:"2rem"}} /> <Heading as="h1">You need to be consistent to go to the championships.</Heading></li>
      </ul>
  </>;
};

export default Rules;
