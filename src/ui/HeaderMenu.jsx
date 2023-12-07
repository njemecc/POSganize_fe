import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

import { useState, useEffect } from "react";
import Heading from "./Heading";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("user").firstName
  );

  useEffect(() => {
    setFirstName(JSON.parse(localStorage.getItem("user")).firstName);
  }, [localStorage.getItem("user")]);

  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      {/* <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading as="h8">{`${firstName}`}</Heading>
      </div>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
