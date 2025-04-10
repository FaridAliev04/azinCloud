import {API} from '../../../../core/configs/api.confog';
import axiosInstance from '../../../../core/configs/axios.config';
import LoginModel from '../models/login.model';

export const getSignInService = () => {
    return axiosInstance.get(API.user).then(res => {
       return res.data.map((user :any) => new LoginModel(user));
    });
};