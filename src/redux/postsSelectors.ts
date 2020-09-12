import { createSelector } from '@reduxjs/toolkit';
import { IPost } from '../interfaces/IPost';

interface IState {
    posts: {
        posts: IPost[];
        error: string | null;
        loading: boolean;
        post: IPost;
    };
}

export const selectPosts = createSelector(
    (state: IState) => ({
        posts: state.posts.posts,
        error: state.posts.error,
        loading: state.posts.loading,
    }),
    (state) => state,
);

export const selectOnePost = createSelector(
    (state: IState) => ({
        post: state.posts.post,
    }),
    (state) => state,
);
