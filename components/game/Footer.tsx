'use client';
import './game.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  setCurrentQuestion,
  checkAnswer,
  unSelectAllAnswers,
} from '@/redux/gameSlice';

const Footer = () => {
  const { questions, answerChecked, currentQuestion } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button
        disabled={questions[currentQuestion]?.answers.every(
          (answer) => !answer.selected
        )}
        onClick={() => {
          dispatch(checkAnswer());
          //   dispatch(unSelectAllAnswers());
        }}
      >
        Check Answer
      </button>
      <button
        disabled={!answerChecked}
        onClick={() => {
          dispatch(setCurrentQuestion());
          dispatch(checkAnswer());
        }}
      >
        Next Question
      </button>
    </div>
  );
};
export default Footer;
