import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {categoryFilter:'all'};

export const categorySlice = createSlice({
    name: 'category',
    initialState: {value: initialStateValue},
    reducers: {
        categoryManager: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {categoryManager} = categorySlice.actions;

export default categorySlice;