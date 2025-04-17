import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateEmailService } from "./email-change.service";
import { useDispatch } from "react-redux";
import { setUpdate } from "../../../../../store/store.reducer";
export const useUpdateEmail = (id: string | null) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newEmail: string) => {
            if (!id) {
                throw new Error("ID is missing");
            }
            return updateEmailService(id, newEmail);
        },
        onSuccess: (_, newEmail) => {
            dispatch(setUpdate({ email: newEmail }));
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            console.error("Error during email update:", error);
        },
    });
};

