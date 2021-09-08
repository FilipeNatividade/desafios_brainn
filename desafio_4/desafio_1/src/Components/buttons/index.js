import { useState } from "react";
import styled from "styled-components";

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
    <Button className={classStyle} onClick={addClassName}>
      {text}
    </Button>
  );
};
export default Buttons;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  font-weight: bold;
  margin-left: 10px;
  outline: none;
  width: 120px;
`;
