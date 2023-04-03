    //import axios from 'axios';
import * as fetch from "components/fetch/fetch";
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL = 'https://64248a257ac292e3cfecdf5f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkApi) => {
    try {
      const response = await fetch.getContacts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
        // async (newContact, thunkApi) => {
        //   try {
        //     const response = await axios.post('/contacts', newContact);
        //     return response.data;
      async (data, { rejectWithValue }) => {
 
        try {
            const response = await fetch.addContact(data);
            return response;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  // async (id, thunkApi) => {
  //   try {
  //     const response = await axios.delete(`/contacts/${id}`);
  //     return response.data;

  async(id, {rejectWithValue}) => {
    try {
        await fetch.removeContact(id);
        return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
