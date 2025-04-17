import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';
import serviceModel from '../models/products.model';

export const getProductsService = (category: string) => {
    return axiosInstance.get(`${API.products}?kategory=${category}`).then(res => {
        return res.data.map((event :any) => new serviceModel(event));
    });
};