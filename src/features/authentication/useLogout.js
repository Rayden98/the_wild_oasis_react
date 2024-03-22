import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";

export function useLogout() {
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logout,
  });
}
