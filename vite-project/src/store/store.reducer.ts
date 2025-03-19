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
        setLocale: (state: IState, action: PayloadAction<ILang>) => {
            const lang = {
                az,
                en,
            };
            state.locale = lang[action.payload];
            localStorage.setItem(`${environment.applicationName}-locale`, action.payload);
        },

    },
});

export const { setLocale} = rootSlice.actions;

export default rootSlice.reducer;