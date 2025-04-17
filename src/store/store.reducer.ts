import { az } from "../assets/lang/az";
import {en} from '../assets/lang/en'
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {environment} from '../core/configs/app.config';
import {IState} from '../store/store';
import {ILang} from '../assets/lang/lang'
const initialState={
    language:[
        {
            id: 1,
            key: 'az',
            value: 'Az'
        },{
            id: 2,
            key: 'en',
            value: 'En'
        }
    ],
    locale:az
}


export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLocale: (state: any, action: PayloadAction<ILang>) => {
            const lang = {
                az,
                en,
            };
            state.locale = lang[action.payload];
            localStorage.setItem(`${environment.applicationName}-locale`, action.payload);
        },
        setUser: (state: any, action: PayloadAction<any>) => {
            // console.log(action.payload.user,)
        },
        setUpdate: (state: any, action: PayloadAction<any>) => {
            const updatedData = action.payload;
            if (updatedData.email) {
                state.user.email = updatedData.email;
            }
        }

    },
});

export const { setLocale,setUser,setUpdate} = rootSlice.actions;

export default rootSlice.reducer;