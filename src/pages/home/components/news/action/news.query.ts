import { useQuery } from '@tanstack/react-query';
import { getNewsCardService } from './news.server';

export const useNewsCard = () => {
    return useQuery({
        queryKey: ['news'], 
        queryFn: () => getNewsCardService(), 
    });
};