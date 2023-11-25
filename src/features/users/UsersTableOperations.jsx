import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

export default function UsersTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "active", label: "Active" },
          { value: "not-active", label: "Not Active" },
        ]}
      />
    </TableOperations>
  );
}
