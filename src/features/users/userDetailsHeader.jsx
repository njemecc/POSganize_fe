//components
import { borderRadius } from "@mui/system";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import { useGetUser } from "./useGetUser";

const UserDetailsHeader = () => {
  const { user, loadingUser } = useGetUser();

  if (loadingUser) return <Spinner />;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          marginBottom: "1rem",
          textAlign: "left",
        }}
      >
        <Heading as="h7">
          Name:{" "}
          <span style={{ fontWeight: "normal" }}>
            {user.firstName} {user.lastName}
          </span>
        </Heading>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Heading as="h7">
          Email: <span style={{ fontWeight: "normal" }}>{user.email}</span>
        </Heading>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Heading as="h7">
          Registrated:{" "}
          <span style={{ fontWeight: "normal" }}>{user.registrationDate}</span>
        </Heading>
      </div>
      {user.active === null ? (
        <Tag size="big" type="yellow">
          not a member
        </Tag>
      ) : user.active ? (
        <Tag size="big" type="green">
          active
        </Tag>
      ) : (
        <Tag size="big" type="red">
          not active
        </Tag>
      )}
    </div>
  );
};

export default UserDetailsHeader;
