import styled from "styled-components";

import Title from "../title";

const Content = ({ stateTitle, stateArticle }) => {
  return (
    <MainTag>
      <Title valueH={2}>{stateTitle}</Title>
      <br />

      <ImgTag src={stateArticle} alt={stateTitle} />
    </MainTag>
  );
};
export default Content;

const MainTag = styled.main`
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 69%;
`;

const ImgTag = styled.img`
  width: 250px;
`;
