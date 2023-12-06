//components
import { useUser } from "../features/authentication/useUser";
import AddMembership from "../features/memberships/AddMembership";
import MembershipTable from "../features/memberships/MempbershipTable";
import UserDetailsHeader from "../features/users/userDetailsHeader";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { ADMIN } from "../utils/roles";

const UserDetails = () => {
  const { role, isLoading } = useUser();

  isLoading && <Spinner />;

  return (
    <>
      <UserDetailsHeader />

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
