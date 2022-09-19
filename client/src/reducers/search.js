import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {searchFilter:"", submitSearch:''};

export const searchSlice = createSlice({
    name: 'search',
    initialState: {value: initialStateValue},
    reducers: {
        searchManager: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {searchManager} = searchSlice.actions;

export default searchSlice;