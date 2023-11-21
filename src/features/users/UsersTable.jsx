//styles
import styled from "styled-components";

//components
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import UsersRow from "./UsersRow";
//react router
import { useSearchParams } from "react-router-dom";

//custom hooks
import { useUsers } from "./useUsers";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const UsersTable = () => {
  const { users } = useUsers();

  // const users = [
  //   {
  //     id: "123",
  //     firstName: "Branislav",
  //     lastName: "Njemec",
  //     email: "branislannjemec@gmail.com",
  //     phoneNumber: "12323121",
  //   },
  // ];

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <TableHeader>
          <div></div>
          <div>email</div>
          <div>name</div>
          <div>email</div>
          <div>number</div>
          <div>isActive</div>
          <div></div>
        </TableHeader>
        <Table.Body
          data={users}
          render={(user) => <UsersRow key={user.email} user={user} />}
        />
      </Table>
    </Menus>
  );
};

export default UsersTable;
