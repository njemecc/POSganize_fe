import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllNews } from "../../services/apiNews";

export function useGetNews() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext === false) {
        return undefined;
      }

      return lastPage.pageNumber + 1;
    },
  });

  const allNews = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.clubNews];
  }, []);

  return { data, allNews, fetchNextPage, hasNextPage, isLoading, hasNextPage };
}
