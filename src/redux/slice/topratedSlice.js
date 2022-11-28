import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v3 } from "../../apiKeys";
import { baseUrl } from "../../apiKeys";


const topratedSlice = createSlice({
    name: "toprated",
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchToprated.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(fetchToprated.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(fetchToprated.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
    }
})

export const fetchToprated = createAsyncThunk("toprated/fetch",
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}movie/top_rated?api_key=${v3}&language=en-US&page=1`);
            return data;
        }
        catch (error) {
            return error;
        }
    })

export default topratedSlice;

