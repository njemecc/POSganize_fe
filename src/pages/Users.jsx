import AddUser from "../features/users/addUser";
import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UsersTableOperations from "../features/users/UsersTableOperations";
const Users = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Users</Heading>
        <UsersTableOperations />
      </Row>
      <Row>
        <UsersTable />
        <AddUser />
      </Row>
    </>
  );
};

export default Users;
