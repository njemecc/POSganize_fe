import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../services/apiNews";

export function useGetNewsById() {
  const { newsId } = useParams();

  const { data: news, isLoading: loadingNews } = useQuery({
    queryKey: ["news", newsId],
    queryFn: () => getNewsById(newsId),
  });

  return { news, loadingNews };
}
