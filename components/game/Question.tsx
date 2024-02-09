import { decode } from 'html-entities';
import './game.css';

const Question = ({
  question,
  length,
  current,
}: {
  question: string;
  length: number;
  current: number;
}) => {
  return (
    <>
      <h1 className="question">
        {decode(question)}
        <h3>{`${current + 1} / ${length}`}</h3>
      </h1>
    </>
  );
};
export default Question;
