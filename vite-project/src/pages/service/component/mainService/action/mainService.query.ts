import { useQuery } from '@tanstack/react-query';
import { getMainService } from './mainService.service';

export const useMainService = (category: string) => {
    return useQuery({
        queryKey: ['products', category], 
        queryFn: () => getMainService(category), 
    });
};