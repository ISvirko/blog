import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),

    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
