import { useQuery } from '@tanstack/react-query';
import { updateEmailService } from './email-change.service';

export const useGetUser = (id: string | null, newEmail:string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => updateEmailService(id!,newEmail),
    enabled: !!id,
  });
};