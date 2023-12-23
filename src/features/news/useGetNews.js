import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllNews } from "../../services/apiNews";

export function useGetNews() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext === false) {
        return false;
      }

      return lastPage.pageNumber + 1;
    },
  });
}
