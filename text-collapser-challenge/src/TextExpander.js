import { useState } from "react";

/* collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"*/

function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show text",
  collapseButtonText = "Collapse text",
  buttonColor = "#ff6622",
  expanded = true,
  children,
}) {
  
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [text, setText] = useState(children.toString())

  const buttonStyle = {
    backgroundColor: { buttonColor },
  };

  return (
    <div>
      {isExpanded ? (<div className="collapse">{text}</div>) : (<div className="collapse">{text.substring(0,collapsedNumWords)} ...</div>)}
     
      <button style={buttonStyle} onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
          {isExpanded ? collapseButtonText  : expandButtonText }
      </button>
    </div>
  );
}

export default TextExpander;
