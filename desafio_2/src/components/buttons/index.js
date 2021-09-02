import { useState } from "react";

const Buttons = () => {
  const [classStyle, setClassStyle] = useState("primary");
  const [text, setText] = useState("Primário");

  const addClassName = () => {
    classStyle === "primary"
      ? setClassStyle("secondary")
      : setClassStyle("primary");

    text === "Primário" ? setText("Secundário") : setText("Primário");
  };

  return (
    <button className={classStyle} onClick={addClassName}>
      {text}
    </button>
  );
};
export default Buttons;
