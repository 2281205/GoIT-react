import * as fetch from "components/fetch/fetch";
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async(id, {rejectWithValue}) => {
    try {
      const response = await fetch.removeContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);