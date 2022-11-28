import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v3 } from "../../apiKeys";
import { baseUrl } from "../../apiKeys";

const PopularSlice = createSlice({
    name: "popular",
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
    }
}

)


export const fetchPopular = createAsyncThunk("popular/fetch",
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}movie/popular/?api_key=${v3}&language=en-US&page=1`);
            return data;
        }
        catch (error) {
            return error;
        }
    })


export default PopularSlice;

