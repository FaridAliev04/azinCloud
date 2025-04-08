import {API} from '../../../../core/configs/api.confog';
import axiosInstance from '../../../../core/configs/axios.config';

export const getSignInService = () => {
    return axiosInstance.get(`${API.user}`).then(res => res.data);
};