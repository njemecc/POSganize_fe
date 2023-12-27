import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "../features/authentication/logout";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

import { useState, useEffect } from "react";
import Heading from "./Heading";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../utils/helpers";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("user").firstName
  );

  const [lastName, setLastName] = useState(
    localStorage.getItem("user").lastName
  );

  const [image, setImage] = useState(localStorage.getItem("user").image);

  useEffect(() => {
    setFirstName(JSON.parse(localStorage.getItem("user")).firstName);
    setLastName(JSON.parse(localStorage.getItem("user")).lastName);
    setImage(JSON.parse(localStorage.getItem("user")).image);
  }, [localStorage.getItem("user")]);

  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image ? (
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
            src={`data:image/png;base64,${image}`}
          />
        ) : (
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
            {...stringAvatar(`${firstName} ${lastName}`)}
          />
        )}
      </div>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
