import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getNewsCardService = () => {
    return axiosInstance.get(`${API.news}`).then(res => {
        return res.data;
    });
};