import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";
import PopularSlice from "./slice/popularSlice";
import nowplayingSlice from "./slice/nowplayingSlice";
import topratedSlice from "./slice/topratedSlice";
import UpcomingSlice from "./slice/upcomingSlice";


const store= configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        popular: PopularSlice.reducer,
        nowplaying: nowplayingSlice.reducer,
        toprated: topratedSlice.reducer,
        upcoming: UpcomingSlice.reducer
    }
})

export default store;