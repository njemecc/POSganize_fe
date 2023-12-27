//components
import { useUser } from "../features/authentication/useUser";
import AddMembership from "../features/memberships/AddMembership";
import MembershipTable from "../features/memberships/MempbershipTable";
import UserDetailsHeader from "../features/users/userDetailsHeader";
import UserDetailsHeaderv2 from "../features/users/UserDetailsHeaderv2";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { ADMIN } from "../utils/roles";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { role, isLoading } = useUser();

  const [image, setImage] = useState(localStorage.getItem("user").image);

  useEffect(() => {
    setImage(JSON.parse(localStorage.getItem("user")).image);
  }, [localStorage.getItem("user")]);

  isLoading && <Spinner />;

  return (
    <>
      {/* <UserDetailsHeader /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "20rem",
          margin: "auto",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "15px",
            objectFit: "contain",
          }}
          src={`data:image/png;base64,${image}`}
        ></img>
      </div>
      <UserDetailsHeaderv2 />

      <Heading as="h2">
        {" "}
        {role === ADMIN ? "All User Memberships" : "Your membership history"}
      </Heading>
      <MembershipTable />
      <AddMembership />
    </>
  );
};

export default UserDetails;
