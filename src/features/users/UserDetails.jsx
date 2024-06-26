//components
import { useUser } from "../authentication/useUser";
import AddMembership from "../memberships/AddMembership";
import MembershipTable from "../memberships/MempbershipTable";
import UserDetailsHeaderv2 from "./UserDetailsHeaderv2";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { ADMIN, USER } from "../../utils/roles";
import { useState, useEffect } from "react";
import { useGetUser } from "./useGetUser";
import { exactProp } from "@mui/utils";
import { useQrCode } from "../hooks/useQrCode";

const UserDetails = () => {
  const { role, isLoading } = useUser();
  const { user, loadingUser } = useGetUser();

  const [image, setImage] = useState();
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    if (role === USER && !isLoading) {
      if (JSON.parse(localStorage.getItem("user")).image) {
        setImage(JSON.parse(localStorage.getItem("user")).image);
        setImageSrc(`data:image/png;base64,${image}`);
      } else {
        setImage(
          "https://p7.hiclipart.com/preview/954/328/914/computer-icons-user-profile-avatar.jpg"
        );
        setImageSrc("../../public/images/user-avatar.png");
      }
    } else if (role == ADMIN && !isLoading && !loadingUser) {
      if (user.image) {
        setImage(user.image);
        setImageSrc(`data:image/png;base64,${image}`);
      } else {
        setImage(
          "https://p7.hiclipart.com/preview/954/328/914/computer-icons-user-profile-avatar.jpg"
        );
        setImageSrc("../../public/images/user-avatar.png");
      }
    }
  }, [
    localStorage.getItem("user"),
    role,
    loadingUser,
    isLoading,
    image,
    imageSrc,
  ]);

  const { qrCode, loadingQrCode } = useQrCode();

  (isLoading || loadingUser) && <Spinner />;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "20rem",
          margin: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "15px",
              objectFit: "contain",
            }}
            src={imageSrc}
          ></img>

          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "15px",
              objectFit: "contain",
            }}
            src={qrCode}
          ></img>
        </div>
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
