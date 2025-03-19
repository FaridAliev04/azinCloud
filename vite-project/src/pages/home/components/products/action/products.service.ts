import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getProductsService = (category: string) => {
    return axiosInstance.get(`${API.products}?kategory=${category}`).then(res => {
        return res.data;
    });
};