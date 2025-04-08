import { useQuery } from "@tanstack/react-query";
import { getPostsUserService } from "./person.service";

export const usePostsUser = (email?: string | null| any|undefined ) => {
    return useQuery({
        queryKey: ["user", email], 
        queryFn: async () => {
            return getPostsUserService(email);
        },
    });
};