import { API } from '../../../configs/api.confog';
import axiosInstance from '../../../configs/axios.config';

export const getNewsCardService = () => {
    return axiosInstance.get(`${API.news}`).then(res => {
        return res.data;
    });
};