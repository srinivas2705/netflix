import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";
import PopularSlice from "./slice/popularSlice";
import nowplayingSlice from "./slice/nowplayingSlice";

const store= configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        popular: PopularSlice.reducer,
        nowplaying: nowplayingSlice.reducer
    }
})

export default store;