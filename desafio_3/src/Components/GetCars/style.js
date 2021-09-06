import styled from "styled-components";

export const Container = styled.div`
  background-color: #0400cd;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Cards = styled.div`
  border-radius: 5px;
  background-color: #87cefa;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  padding: 15px;
  width: 350px;
  img {
    border: 3px solid #0400cd;
    margin-bottom: 15px;
    width: 100%;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled.p`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const ColorCar = styled.span`
  background-color: ${(props) => props.colorCar};
  border: ${(props) => props.colorCar === '#87cefa' ? '2px solid #0400cd' : 'none'};
  height: 30px;
  width: 100px;
`;
