import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (req: Request) => {
  const { category, amount, difficulty, type } = await req.json();

  console.log(category, amount, difficulty, type);

  try {
    const response = await axios(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    );

    const data = response.data.results.map((question: any) => {
      const answers = [
        ...question.incorrect_answers.map((answer: string) => ({
          answer,
          selected: false,
        })),
        { answer: question.correct_answer, selected: false },
      ];

      return {
        question: question.question,
        answers: answers.sort(() => Math.random() - 0.5),
        correct_Answer: question.correct_answer,
      };
    });

    console.log(data);

    return NextResponse.json({ questions: data });
  } catch (e) {
    console.error('error', e);
    return NextResponse.json({ questions: [], error: e });
  }
};
