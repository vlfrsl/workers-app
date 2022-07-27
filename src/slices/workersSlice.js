import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
};


export const fetchWorkers = createAsyncThunk(
    'workers/fetchWorkers',
    async (data) => {
        return "";
    }
);

export const workersSlice = createSlice({
    name: 'workers',
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWorkers.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
});


export default workersSlice.reducer;
