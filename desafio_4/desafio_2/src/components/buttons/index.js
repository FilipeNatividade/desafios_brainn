import styled from "styled-components";

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
    <ButtonTag className={classStyle} onClick={addClassName}>
      {text}
    </ButtonTag>
  );
};
export default Buttons;

const ButtonTag = styled.button`
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
