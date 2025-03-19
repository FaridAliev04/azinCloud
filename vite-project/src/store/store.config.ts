import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store.reducer';
import {useSelector} from 'react-redux';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export const useStore = (key: any) => {
    const data = useSelector((state: any) => state[key]);
    return data;
};