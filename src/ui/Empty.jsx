import Heading from "./Heading";

function Empty({ resource }) {
  return <Heading as="h2">No {resource} could be found.</Heading>;
}

export default Empty;
