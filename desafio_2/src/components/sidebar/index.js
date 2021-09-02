import Title from "../title";

const Sidebar = ({ arr }) => {
  return (
    <aside>
      <Title valueH={2}>Sidebar</Title>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>
            <a href={item.content}>{item.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
