import Title from "../Title";
import List from "../List";

const Sidebar = () => {
  return (
    <aside>
      <Title>Sidebar</Title>
      <List
        arrayList={["azul", "vermelho", "amarelo", "roxo", "cinza", "rosa"]}
      />
    </aside>
  );
};
export default Sidebar;
