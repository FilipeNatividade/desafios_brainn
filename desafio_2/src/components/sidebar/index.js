import Title from "../title";

const Sidebar = ({ arr, setStateArticle, setStateTitle }) => {

const handleStates = (item) => {
  setStateTitle(item.name)
  setStateArticle(item.content)
}

  return (
    <aside>
      <Title valueH={2}>Sidebar</Title>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>
            <a href onClick={() => handleStates(item)}>{item.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
