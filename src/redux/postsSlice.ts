import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as R from 'ramda';
import { loadPosts, addPost, editPost, deletePost, getPostById, addComment } from './postsOperations';
import { IPost } from '../interfaces/IPost';
import { IComment } from '../interfaces/IComment';

const findItemById = (id) => (item) => item.id === id;

interface GenericState {
    posts: IPost[];
    loading: boolean;
    error: string | null;
    post: IPost | null;
}

const initialState: GenericState = {
    posts: [],
    loading: false,
    error: null,
    post: null,
};

interface MyKnownError {
    errorMessage?: string;
}

const postsSlice = createSlice({
    name: 'posts',

    initialState: initialState,

    reducers: {},

    extraReducers: (builder) => {
        // LOAD POSTS

        builder.addCase(loadPosts.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(loadPosts.fulfilled, (state: GenericState, { payload }: PayloadAction<IPost[]>) => {
            state.posts = payload;
            state.loading = false;
        });

        builder.addCase(loadPosts.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });

        // ADD POST

        builder.addCase(addPost.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(addPost.fulfilled, (state: GenericState, { payload }: PayloadAction<IPost>) => {
            state.posts = R.append(payload, state);
            state.loading = false;
        });

        builder.addCase(addPost.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });

        // GET POST BY ID

        builder.addCase(getPostById.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getPostById.fulfilled, (state: GenericState, { payload }: PayloadAction<IPost>) => {
            state.post = payload;
            state.loading = false;
        });

        builder.addCase(getPostById.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });

        // EDIT POST

        builder.addCase(editPost.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(editPost.fulfilled, (state: GenericState, { payload }: PayloadAction<IPost>) => {
            state.post = { ...state.post, title: payload.title, body: payload.body };
            state.loading = false;
        });

        builder.addCase(editPost.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });

        // DELETE POST

        builder.addCase(deletePost.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(deletePost.fulfilled, (state: GenericState, { payload }: PayloadAction<string>) => {
            state.posts = R.reject(findItemById(payload));
            state.loading = false;
        });

        builder.addCase(deletePost.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });

        // ADD COMMENT

        builder.addCase(addComment.pending, (state: GenericState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(addComment.fulfilled, (state: GenericState, { payload }: PayloadAction<IComment>) => {
            state.post.comments = R.append(payload, state.post.comments);
            state.loading = false;
        });

        builder.addCase(addComment.rejected, (state: GenericState, { payload }: PayloadAction<MyKnownError>) => {
            state.loading = false;
            state.error = payload.errorMessage;
        });
    },
});

export default postsSlice;
