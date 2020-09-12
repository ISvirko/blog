import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    },

    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
