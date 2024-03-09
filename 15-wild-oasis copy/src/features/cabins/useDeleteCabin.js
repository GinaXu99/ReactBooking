import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    console.log('inside delete function')

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        /**
         * these two work the same since its same id: 
         * mutationFn: deleteCabin,
         * mutationFn: (id) => deleteCabin(id),
         */
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success(`Cabin successfully deleted`);
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) =>
            toast.error(err.message)

    });
    console.log(`${isDeleting}`);
    return { isDeleting, deleteCabin };
}