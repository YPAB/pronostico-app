import {configureStore,createSlice} from '@reduxjs/toolkit';
import { keyWeather } from '../src/data/keyWeather';

const initialState = {

    weathers: []

}

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {

        setWeathers: (state,action) => {
            return { ...state,weathers:action.payload };
        },
    }
});


export const getWeathersAsync = (filter) => async(dispatch) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${filter}&lang=es&appid=${keyWeather}`);
    const weathers = await response.json();
    console.log('weathers', weathers);

    dispatch(storeSlice.actions.setWeathers(weathers));
}


export const store = configureStore({
    reducer: storeSlice.reducer

});