import { useQuery } from '@tanstack/react-query';
import { getMainService } from './main-service.service';

export const useMainService = (category: string) => {
    return useQuery({
        queryKey: ['products', category], 
        queryFn: () => getMainService(category), 
    });
};