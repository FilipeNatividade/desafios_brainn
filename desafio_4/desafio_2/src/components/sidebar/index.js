import styled from "styled-components";

import Title from "../title";

const Sidebar = ({ arr, setStateArticle, setStateTitle }) => {
  const handleStates = (item) => {
    setStateTitle(item.name);
    setStateArticle(item.content);
  };

  return (
    <AsideTag>
      <Title valueH={2}>Sidebar</Title>
      <ul>
        {arr.map((item) => (
          <ListTag key={item.id}>
            <ButtonTag className="buttonLi" onClick={() => handleStates(item)}>
              {item.name}
            </ButtonTag>
          </ListTag>
        ))}
      </ul>
    </AsideTag>
  );
};

export default Sidebar;

const AsideTag = styled.aside`
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30%;
`;

const ListTag = styled.li`
  margin: 5px;
  margin-left: 55px;
`;

const ButtonTag = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
  width: 150px;
`;
