import { useQuery } from '@tanstack/react-query';
import { getProductsService } from './products.service';

export const useProducts = (category: string) => {
    return useQuery({
        queryKey: ['products', category], 
        queryFn: () => getProductsService(category), 
    });
};