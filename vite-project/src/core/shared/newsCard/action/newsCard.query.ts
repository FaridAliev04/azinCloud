import { useQuery } from '@tanstack/react-query';
import { getNewsCardService } from './newsCard.service';

export const useNewsCard = () => {
    return useQuery({
        queryKey: ['news'], 
        queryFn: () => getNewsCardService(), 
    });
};