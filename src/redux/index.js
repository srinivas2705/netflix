import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";
import PopularSlice from "./slice/popularSlice";

const store= configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        popular: PopularSlice.reducer
    }
})

export default store;