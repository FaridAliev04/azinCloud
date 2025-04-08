import { useQuery } from "@tanstack/react-query";
import { getSignInService } from "./sign-in.servece";

export const useSignIn = () => {
    return useQuery({
        queryKey: ["user"], 
        queryFn: async () => {
            return getSignInService();
        },
    });
};