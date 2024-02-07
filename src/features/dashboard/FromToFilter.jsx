import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//hooks

import { useSearchParams } from "react-router-dom";

const FromToFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fromChangeHandler = (date) => {
    searchParams.set("fromDate", date.toISOString().substring(0, 10));
    setSearchParams(searchParams);
  };

  const toChangeHandler = (date) => {
    searchParams.set("toDate", date.toISOString().substring(0, 10));
    setSearchParams(searchParams);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.4px",
            fontWeight: "550",
          }}
        >
          From
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={fromChangeHandler} />
        </LocalizationProvider>{" "}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.4px",
            fontWeight: "550",
          }}
        >
          To
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={toChangeHandler} />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default FromToFilter;
