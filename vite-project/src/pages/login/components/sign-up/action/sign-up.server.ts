import {API} from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const signUp = (credentials: any): Promise<{ token: string }> => {
    return axiosInstance.post(API.user, credentials)
        .then((res:any) => res.data);
};
