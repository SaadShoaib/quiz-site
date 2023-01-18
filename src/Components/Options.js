import "./Options.css";

function Option(props) {
  function handleClick(e) {
    const allSiblings = e.target.parentElement.childNodes;
    allSiblings.forEach((item) => {
      item.classList.remove("highlighted-option");
    });

    e.target.classList.add("highlighted-option");
  }
  const optionsList = props.options.map((item) => {
    return (
      <p
        onClick={handleClick}
        data-check={item.check}
        className="option"
        key={props.options.indexOf(item)}
      >
        {item.text}
      </p>
    );
  });
  return <div className="options-container">{optionsList}</div>;
}

export default Option;
