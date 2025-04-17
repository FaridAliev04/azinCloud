import {API} from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getPostsUserService = (email: string | null|any|undefined  ) => {
    return axiosInstance.get(`${API.user}?email=${email}`).then(res => res.data);
};
