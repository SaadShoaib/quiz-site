import { useEffect } from "react";
import { data } from "./data.js";
import Question from "./Questions.js";
import { useState } from "react";

function QuizContainer() {
  const [score, setScore] = useState(0);

  function handleSubmit() {
    let scoreCount = 0;
    const allCheckTrueOptions = document.querySelectorAll(
      '[data-check="true"]'
    );
    allCheckTrueOptions.forEach((item) => {
      item.classList.add("correct-option");
    });
    const allHighlightedOptions = document.querySelectorAll(
      ".highlighted-option"
    );
    allHighlightedOptions.forEach((item) => {
      if (!item.classList.contains("correct-option")) {
        item.classList.add("wrong-option");
      } else {
        scoreCount++;
      }
    });
    setScore(scoreCount);

    document.querySelector(".scoreContainer").style.display = "block";

    document.querySelector(".submit").style.display = "none";
    document.querySelector(".playAgain").style.display = "block";
  }

  function playAgain() {
    document.querySelector(".submit").style.display = "block";
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".scoreContainer").style.display = "none";

    const allOptions = document.querySelectorAll(".options-container p");
    allOptions.forEach((item) => {
      item.classList = "option";
    });
  }

  const questionsList = data.map((item) => {
    return (
      <div>
        <Question
          question={item.question}
          option1={item.option1}
          option2={item.option2}
          option3={item.option3}
          option4={item.option4}
        />
      </div>
    );
  });
  return (
    <div>
      {questionsList}
      <div className="footer">
        <div className="scoreContainer">Your score is {score}/7</div>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="playAgain" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;
