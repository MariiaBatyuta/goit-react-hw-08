import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://contactsbook-backend-j0i5.onrender.com/api/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    delete axios.defaults.headers.common["Authorization"];
};

export const register = createAsyncThunk("auth/register", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/register", userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk("auth/logIn", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    if (savedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
      
    setAuthHeader(savedToken); 

    const response = await axios.get("/users/login");
    return response.data;
}, {
    condition: (_, {getState}) => {
        const reduxState = getState();
        const savedToken = reduxState.auth.token;
        return savedToken !== null;
    }
});

