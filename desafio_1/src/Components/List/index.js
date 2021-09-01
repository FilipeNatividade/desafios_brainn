const List = ({ arrayList }) => {
  return (
    <ul>
      {arrayList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default List;
