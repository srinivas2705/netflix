import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v3 } from "../../apiKeys";
import { baseUrl } from "../../apiKeys";


const nowplayingSlice = createSlice({
    name: "nowplaying",
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchNowplaying.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(fetchNowplaying.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(fetchNowplaying.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
    }
})

export const fetchNowplaying = createAsyncThunk("nowplaying/fetch",
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}movie/now_playing/?api_key=${v3}&language=en-US&page=1`);
            return data;
        }
        catch (error) {
            return error;
        }
    })

export default nowplayingSlice;

