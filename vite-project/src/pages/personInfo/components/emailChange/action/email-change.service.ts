import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const updateEmailService = (id: string | null, newEmail: string) => {
    return axiosInstance
        .patch(`${API.user}/${id}`, { email: newEmail })
        .then(res => res.data);
};