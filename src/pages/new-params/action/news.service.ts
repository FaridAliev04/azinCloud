import { API } from '../../../core/configs/api.confog';
import axiosInstance from '../../../core/configs/axios.config';
import newsParamsModel from '../models/new-params.model';

export const getNewsCardService = (id: string|undefined) => {
    return axiosInstance.get(`${API.news}/${id}`).then(res => {
        return new newsParamsModel(res.data);
    });
};