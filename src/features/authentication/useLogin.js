import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
export function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading: isLogging,
    status,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      if (user.statusCode === 401) {
        toast.error(user.message);
      } else {
        toast.success("You are succesfully logged in");
        navigate("/trainings");
      }
    },
    onError: (err) => {
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLogging, status };
}
