import { useQuery } from '@tanstack/react-query';
import { getNewsCardService } from './news.service';

export const useNewsCard = (id:string|undefined ) => {
    return useQuery({
        queryKey: ['news',id], 
        queryFn: () => getNewsCardService(id), 
    });
};