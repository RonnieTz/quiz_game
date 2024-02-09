'use client';

import './new_game.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { fetchCategories } from '@/redux/fetchCategories';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  setCategory,
  setAmount,
  setDifficulty,
  setType,
  setCurrentQuestion,
  reset,
} from '@/redux/gameSlice';
import { fetchQuestions } from '@/redux/fetchQuestions';

const NewGame = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, form } = useSelector((state: RootState) => state.game);
  const router = useRouter();
  const { amount, category, difficulty, type } = form;
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const onClick = async () => {
    const data = { amount, category, difficulty, type };
    dispatch(fetchQuestions(data));
    dispatch(reset());
    router.push('/game');
  };
  return (
    <form className="new-game-container">
      <select
        value={category}
        onChange={(e: any) => {
          dispatch(setCategory(e.target.value));
        }}
        className="select"
        name="categories"
        id="categories"
      >
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="number"
        name="amount"
        id="amount"
        min="1"
        max="50"
        placeholder="Number of questions"
        onChange={(e) => dispatch(setAmount(e.target.valueAsNumber!))}
        value={amount}
      />

      <select
        value={difficulty}
        onChange={(e: any) => dispatch(setDifficulty(e.target.value))}
        className="select"
        name="difficulty"
        id="difficulty"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select
        value={type}
        onChange={(e: any) => dispatch(setType(e.target.value))}
        className="select"
        name="type"
        id="type"
      >
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>

      <button type="button" onClick={onClick} className="submit-button">
        Load
      </button>
    </form>
  );
};
export default NewGame;
