import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {priceFilter:[0, 3000]};

export const priceSlice = createSlice({
    name: 'price',
    initialState: {value: initialStateValue},
    reducers: {
        priceManager: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {priceManager} = priceSlice.actions;

export default priceSlice;