//styles
import styled from "styled-components";
//icons
import { HiOutlineUsers } from "react-icons/hi2";

import { FaRegNewspaper } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdOutlineSportsMartialArts } from "react-icons/md";

//router
import { NavLink } from "react-router-dom";
//hooks
import { useUser } from "../features/authentication/useUser";
import { ADMIN } from "../utils/roles";
//constants

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  //authorization
  const { role } = useUser();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/trainings">
            <MdOutlineSportsMartialArts />
            <span>Trainings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news">
            <FaRegNewspaper />
            <span>News</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/rules">
            <RiFilePaper2Line />
            <span>Rules</span>
          </StyledNavLink>
        </li>
        {role === ADMIN && (
          <li>
            <StyledNavLink to="/dashboard">
              <IoBarChartOutline />
              <span>Dashboard</span>
            </StyledNavLink>
          </li>
        )}
      </NavList>
    </nav>
  );
};

export default MainNav;
