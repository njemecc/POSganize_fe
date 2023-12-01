import { useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "";

  function handleChange(e) {
    searchParams.set("sortOrder", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      value={sortOrder}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
};

export default SortBy;
