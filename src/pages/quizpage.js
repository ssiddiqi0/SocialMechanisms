// src/pages/QuizPage.js
import React from "react";
import Quiz from "react-quiz-component";
import { quiz } from "./quizdata"; // Make sure the path is correct

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <Quiz quiz={quiz} continueTillCorrect={true} showInstantFeedback={true} />
    </div>
  );
};
// article 1: https://www.thecanadianencyclopedia.ca/en/article/calder-case
// https://www.komagatamaruweek.com/
export default QuizPage;
