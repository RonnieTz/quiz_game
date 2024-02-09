'use client';

import './game.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import Question from './Question';
import Answers from './Answers';
import { setCurrentQuestion } from '@/redux/gameSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Footer from './Footer';

const Container = () => {
  const router = useRouter();
  const { questions, currentQuestion } = useSelector(
    (state: RootState) => state.game
  );
  //   useEffect(() => {
  //     if (questions.length === 0) {
  //       router.push('/');
  //     }
  //   }, [questions]);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Question
        question={questions[currentQuestion]?.question}
        length={questions.length}
        current={currentQuestion}
      />
      <Answers answers={questions[currentQuestion]?.answers} />
      <Footer />
    </div>
  );
};
export default Container;
