import { signUp } from './sign-up.server';
import {store} from '../../../../../store/store.config';
import {setUser} from '../../../../../store/store.reducer';
import {setToken} from '../../../../../core/helpers/get-token';
import {useNavigate} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';
import { useMutation } from '@tanstack/react-query';



export const useSignUp = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: any) => {
            return signUp(credentials);
        },
        onSuccess: (response:any) => {
            setToken('token');
            store.dispatch(setUser(response));
            navigate(Routes.default);
        },
    });
};

