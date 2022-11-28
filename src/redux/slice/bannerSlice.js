import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../apiKeys";
import {v3} from "../../apiKeys";


const bannerSlice = createSlice({
    name: "banner",
    initialState:{
        value: [],
        status: "pending",
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchBanners.pending,(state,action) =>{
            state.status ="pending";
            state.error=null;
        })
        builder.addCase(fetchBanners.rejected,(state,action) =>{
            state.status ="rejected";
            state.error= action.payload;
        })
        builder.addCase(fetchBanners.fulfilled,(state,action) =>{
            state.value= action.payload;
            state.status ="fulfilled";
            state.error= null;
        })
    }
})


export const fetchBanners = createAsyncThunk("Banners/fetch",
async() => {
    try{
       const {data} = await axios.get(`${baseUrl}movie/now_playing/?api_key=${v3}&language=en-US&page=1`);
       let{results} = data;
       results.splice(0,5);
       data.results= results;
       return data;
    }
    catch(error){
        return error;
    }
})

export default bannerSlice;
