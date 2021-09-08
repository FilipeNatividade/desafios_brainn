import styled from 'styled-components'

import Title from "../title";
import List from "../list";

const Sidebar = () => {
  return (
    <Aside>
      <Title valueH={2} >Sidebar</Title>
      <List
        arrayList={["azul", "vermelho", "amarelo", "roxo", "cinza", "rosa"]}
      />
    </Aside>
  );
};
export default Sidebar;

const Aside = styled.aside`
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30%;
`
