//components
import { useUser } from "../features/authentication/useUser";
import AddMembership from "../features/memberships/AddMembership";
import MembershipTable from "../features/memberships/MempbershipTable";
import UserDetailsHeader from "../features/users/userDetailsHeader";
import UserDetailsHeaderv2 from "../features/users/UserDetailsHeaderv2";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { ADMIN, USER } from "../utils/roles";
import { useState, useEffect } from "react";
import { useGetUser } from "../features/users/useGetUser";

const UserDetails = () => {
  const { role, isLoading } = useUser();
  const { user, loadingUser } = useGetUser();

  const [image, setImage] = useState(localStorage.getItem("user").image);

  useEffect(() => {
    if (role === ADMIN && !isLoading && !loadingUser) {
      console.log(user);
      user.image
        ? setImage(user.image)
        : setImage(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
          );
    } else if (role === USER && !image) {
      setImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
      );
    } else {
      setImage(JSON.parse(localStorage.getItem("user")).image);
    }
  }, [localStorage.getItem("user"), role, loadingUser, isLoading]);

  (isLoading || loadingUser) && <Spinner />;

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
          src={!user?.image ? image : `data:image/png;base64,${image}`}
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
