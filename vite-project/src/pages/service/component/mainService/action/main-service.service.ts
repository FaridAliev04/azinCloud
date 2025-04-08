import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getMainService = (category: string) => {
    return axiosInstance.get(`${API.products}?kategory=${category}`).then(res => {
        return res.data;
    });
};