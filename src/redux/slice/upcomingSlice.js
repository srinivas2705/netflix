import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v3 } from "../../apiKeys";
import { baseUrl } from "../../apiKeys";

const UpcomingSlice = createSlice({
    name: "upcoming",
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUpcoming.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(fetchUpcoming.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
    }
})


export const fetchUpcoming = createAsyncThunk("upcoming/fetch",
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}movie/upcoming?api_key=${v3}&language=en-US&page=1`);
            return data;
        }
        catch (error) {
            return error;
        }
    })


export default UpcomingSlice;

