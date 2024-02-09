'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'game/fetchCategories',
  async () => {
    const response = await axios.get('http://localhost:3000/api/categories');
    return response.data.categories;
  }
);
