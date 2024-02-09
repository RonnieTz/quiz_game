import { NextResponse } from 'next/server';
import axios from 'axios';

export const GET = async () => {
  const response = await axios.get('https://opentdb.com/api_category.php');
  const categories = response.data.trivia_categories;

  return NextResponse.json({ categories });
};
