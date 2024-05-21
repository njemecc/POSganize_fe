import { useQuery } from "@tanstack/react-query";
import { getQrCode } from "../../services/apiQrCode";

export function useQrCode() {
  const { data: qrCode, isLoading: loadingQrCode } = useQuery({
    queryKey: ["qrCode"],
    queryFn: getQrCode,
  });

  return { qrCode, loadingQrCode };
}
