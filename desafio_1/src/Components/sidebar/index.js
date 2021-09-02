import Title from "../title";
import List from "../list";

const Sidebar = () => {
  return (
    <aside>
      <Title valueH={2} >Sidebar</Title>
      <List
        arrayList={["azul", "vermelho", "amarelo", "roxo", "cinza", "rosa"]}
      />
    </aside>
  );
};
export default Sidebar;
