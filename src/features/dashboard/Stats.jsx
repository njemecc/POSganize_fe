import { HiOutlineBanknotes } from "react-icons/hi2";

import { MdCardMembership } from "react-icons/md";

import { MdOutlineSportsMartialArts } from "react-icons/md";

import Stat from "./Stat";

function Stats({ totalRevenue, totalMembers }) {
  return (
    <>
      <Stat
        icon={<MdCardMembership />}
        title="Number of Members"
        value={totalMembers}
        color="blue"
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="Profit"
        value={totalRevenue}
        color="green"
      />
      <Stat
        icon={<MdOutlineSportsMartialArts />}
        title="Number of trainings"
        value={totalMembers}
        color="red"
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="Profit"
        value={totalRevenue}
        color="green"
      />
    </>
  );
}

export default Stats;
