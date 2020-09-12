import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

// LOAD POSTS

export const loadPosts = createAsyncThunk('posts/loadPosts', async (_, thunkAPI) => {
    try {
        const res = await axios('/posts');
        return res.data as IPost[];
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// ADD POST

export const addPost = createAsyncThunk('posts/addPost', async (newPost: IPost, thunkAPI) => {
    try {
        const res = await axios.post('/posts', newPost);
        return res.data as IPost;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// GET POST BY ID

export const getPostById = createAsyncThunk('posts/getPostById', async (id: string, thunkAPI) => {
    try {
        const res = await axios(`/posts/${id}?_embed=comments`);
        return res.data as IPost;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// EDIT POST

export const editPost = createAsyncThunk('notes/editPost', async ({ title, body, id: postId }: IPost, thunkAPI) => {
    try {
        const res = await axios.put(`/posts/${postId}`, { title, body, comments: [] });
        return res.data as IPost;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// DELETE POST

export const deletePost = createAsyncThunk('posts/deletePost', async (id: string, thunkAPI) => {
    try {
        await axios.delete(`/posts/${id}`);
        return id as string;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// ADD COMMENT

export const addComment = createAsyncThunk('posts/addComment', async ({ postId, body }: IComment, thunkAPI) => {
    try {
        const res = await axios.post('/comments', { postId, body });
        return res.data as IComment;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
