'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Form = {
  category: number;
  amount: number;
  difficulty: string;
  type: string;
};

export const fetchQuestions = createAsyncThunk(
  'game/fetchQuestions',
  async (form: Form) => {
    const { category, amount, difficulty, type } = form;

    const response = await axios.post('http://localhost:3000/api/game', {
      category,
      amount,
      difficulty,
      type,
    });
    return response.data.questions;
  }
);
