import { API } from '../../../../../core/configs/api.confog';
import axiosInstance from '../../../../../core/configs/axios.config';
import mainServiceModel from '../models/main-service.model';

export const getMainService = (category: string) => {
    return axiosInstance.get(`${API.products}?kategory=${category}`).then(res => {
        return res.data.map((event :any) => new mainServiceModel(event));
    });
};