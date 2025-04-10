import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';
import emailChangeModel from '../models/email-change.model';

export const updateEmailService = (id: string | null, newEmail: string) => {
    return axiosInstance
        .patch(`${API.user}/${id}`, { email: newEmail })
        .then(res => new emailChangeModel(res.data));
};