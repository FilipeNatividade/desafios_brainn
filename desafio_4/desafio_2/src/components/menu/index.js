import styled from "styled-components";
import styed from "styled-components";

import Buttons from "../buttons";

const Menu = () => {
  return (
    <NavTag>
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
    </NavTag>
  );
};
export default Menu;

const NavTag = styled.nav`
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  margin-top: 5px;
  padding: 0 20px;
  width: 100%;
  .primary {
    background-color: #00ff00;
    color: #9400d3;
  }

  .secondary {
    background-color: #9400d3;
    color: #00ff00;
  }
`;
