//components
import AddMembership from "../features/memberships/AddMembership";
import MembershipTable from "../features/memberships/MempbershipTable";
import UserDetailsHeader from "../features/users/userDetailsHeader";
import Heading from "../ui/Heading";

const UserDetails = () => {
  return (
    <>
      <UserDetailsHeader />
      <Heading as="h2">All User Memberships</Heading>
      <MembershipTable />
      <AddMembership />
    </>
  );
};

export default UserDetails;
