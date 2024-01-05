import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";
import { ADMIN } from "../utils/roles";
import Heading from "./Heading";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  background-color: var(--color-yellow-100);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  margin-top: 0rem;
`;

const HeaderInfo = () => {
  const { role } = useUser();

  return (
    <StyledHeaderMenu>
      {role === ADMIN ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Heading as="h3">
            Try <span style={{ color: "var(--color-brand-600)" }}>Stripe</span>{" "}
            payment with <b>USER </b>role credentials ⏩
          </Heading>
          <Heading as="h5">Username: user@email.com</Heading>
          <Heading as="h5">Password: user1234</Heading>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Heading as="h3">
            Try data <span style={{ color: "red" }}>mutations </span>
            with <b>ADMIN </b>role credentials ⏩
          </Heading>
          <Heading as="h5">Username: admin@email.com</Heading>
          <Heading as="h5">Password: admin1234</Heading>
        </div>
      )}
    </StyledHeaderMenu>
  );
};

export default HeaderInfo;
