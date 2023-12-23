//styles
import styles from "./AllNews.module.css";
//components
import SingleNews from "./SingleNews";
import Spinner from "../../ui/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
//hooks
import { useGetNews } from "./useGetNews";

const AllNews = () => {
  const { allNews, data, fetchNextPage, hasNextPage, isLoading } = useGetNews();

  if (isLoading) return <Spinner />;

  return (
    <InfiniteScroll
      id="infinite-scroll"
      dataLength={data.pages.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      height={"100vh"}
      loading={<Spinner />}
      endMessage="No more news"
    >
      <div className={styles["all-posts"]}>
        {allNews?.map((post, index) => (
          <SingleNews key={index} post={post} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default AllNews;
