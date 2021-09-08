import styled from "styled-components";

const List = ({ arrayList }) => {
  return (
    <ul>
      {arrayList.map((item, index) => (
        <ListTag key={index}>{item}</ListTag>
      ))}
    </ul>
  );
};
export default List;

const ListTag = styled.li`
  margin: 5px;
  margin-left: 55px;
`;
