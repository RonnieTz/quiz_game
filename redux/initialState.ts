type InitialState = {
  categories: { id: number; name: string }[];
  form: {
    category: number;
    amount: number;
    difficulty: string;
    type: string;
  };
  questions: {
    question: string;
    answers: { answer: string; selected: boolean }[];
    correct_Answer: string;
  }[];
  currentQuestion: number;
  answerChecked: boolean;
};

export const initialState: InitialState = {
  categories: [],
  form: { category: 9, amount: 10, difficulty: 'easy', type: 'multiple' },
  questions: [],
  currentQuestion: 0,
  answerChecked: false,
};
