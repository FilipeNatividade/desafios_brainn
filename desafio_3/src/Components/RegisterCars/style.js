import styled from "styled-components";

export const Container = styled.form`
align-items: center;
  background-color: #87cefa;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  .colorContainer {
    input {
      width: 100px;
    }
  }
  button {
    background-color: #0400cd;
    border-radius: 10px;
    color: #87cefa;
    font-weight: bolder;
    font-size: 22px;
    padding: 10px 15px;
    width: 200px;
  }
`;

export const InputLabel = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 22px;
  font-weight: bolder;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  input {
    border-radius: 10px;
    height: 30px;
    padding: 0 15px;
    width: 70%;
  }
`;
