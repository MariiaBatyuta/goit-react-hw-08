import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const responce = await axios.get("/contacts");
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const responce = await axios.post("/contacts", newContact);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


export const editContact = createAsyncThunk("contacts/editContact",async (updatedContact, thunkAPI) => {
    try {
      const { id, ...newContact } = updatedContact; 
      const response = await axios.patch(`/contacts/${id}`, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);