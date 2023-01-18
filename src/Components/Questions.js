import Option from "./Options";
import "./Questions.css";

function Question(props) {
  //   console.log(props);
  return (
    <div className="question-container">
      <div className="question">{props.question}</div>
      <Option
        options={[props.option1, props.option2, props.option3, props.option4]}
      />
    </div>
  );
}

export default Question;
