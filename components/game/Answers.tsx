'use client';

import { decode } from 'html-entities';
import './game.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { selectAnswer } from '@/redux/gameSlice';

const Answers = ({
  answers,
}: {
  answers: { answer: string; selected: boolean }[];
}) => {
  const dispatch = useDispatch();
  const handleSelect = (index: number) => {
    dispatch(selectAnswer(index));
  };
  const { questions, currentQuestion, answerChecked } = useSelector(
    (state: RootState) => state.game
  );
  const correct = questions[currentQuestion]?.correct_Answer;

  return (
    <div className="answers">
      {answers?.map((item, index) => (
        <button
          disabled={answerChecked}
          onClick={() => handleSelect(index)}
          className={`answer ${item.selected ? 'selected' : null} ${
            item.answer === correct && answerChecked ? 'correct' : null
          } ${
            item.selected && item.answer !== correct && answerChecked
              ? 'wrong'
              : null
          }`}
          key={index}
        >
          <span className="index">{`${index + 1}:`}</span>
          {decode(item.answer)}
        </button>
      ))}
    </div>
  );
};
export default Answers;
