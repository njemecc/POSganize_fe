import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Users = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Users</Heading>
        <p>filteri neki</p>
      </Row>
      <Row>
        <UsersTable />
      </Row>
    </>
  );
};

export default Users;
