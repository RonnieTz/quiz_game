'use client';

import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchCategories } from './fetchCategories';
import { fetchQuestions } from './fetchQuestions';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.form.category = action.payload;
    },
    setAmount: (state, action) => {
      state.form.amount = action.payload;
    },
    setDifficulty: (state, action) => {
      state.form.difficulty = action.payload;
    },
    setType: (state, action) => {
      state.form.type = action.payload;
    },
    setCurrentQuestion: (state) => {
      state.currentQuestion = state.currentQuestion + 1;
    },
    selectAnswer: (state, action) => {
      const index = action.payload;
      const selected =
        state.questions[state.currentQuestion].answers[index].selected;
      state.questions[state.currentQuestion].answers.forEach(
        (answer) => (answer.selected = false)
      );
      state.questions[state.currentQuestion].answers[index].selected =
        !selected;
    },
    unSelectAllAnswers: (state) => {
      state.questions[state.currentQuestion].answers.forEach(
        (answer) => (answer.selected = false)
      );
    },
    checkAnswer: (state) => {
      state.answerChecked = !state.answerChecked;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default gameSlice.reducer;

export const {
  setCategory,
  setAmount,
  setDifficulty,
  setType,
  setCurrentQuestion,
  selectAnswer,
  checkAnswer,
  unSelectAllAnswers,
  reset,
} = gameSlice.actions;
