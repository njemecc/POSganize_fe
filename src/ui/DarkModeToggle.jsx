import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
// import { useDarkMode } from "../context/DarkModeContext";
const DarkModeToggle = () => {
  // const { isDarkMode, toggleDarkmode } = useDarkMode();

  return (
    <ButtonIcon /*onClick={toggleDarkmode}*/>
      <HiOutlineMoon />
      {/* {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />} */}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
