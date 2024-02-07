import { HiOutlineBanknotes } from "react-icons/hi2";

import { MdCardMembership } from "react-icons/md";

import { MdOutlineSportsMartialArts } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";

import Stat from "./Stat";

function Stats({
  totalRevenue,
  totalMembers,
  mostPopularTraining,
  numberOfTrainings,
}) {
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
        value={`$${totalRevenue}`}
        color="green"
      />
      <Stat
        icon={<MdOutlineSportsMartialArts />}
        title="Number of active trainings"
        value={numberOfTrainings}
        color="red"
      />

      <Stat
        icon={<MdOutlineSportsKabaddi />}
        title="Most popular training"
        value={mostPopularTraining}
        color="yellow"
      />
    </>
  );
}

export default Stats;
