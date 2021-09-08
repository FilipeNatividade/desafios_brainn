import styled from "styled-components";

import Header from "./Components/header";
import Menu from "./Components/menu";
import Sidebar from "./Components/sidebar";
import Content from "./Components/content";
import Footer from "./Components/footer";

const App = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Section>
        <Sidebar />
        <Content />
      </Section>
      <Footer />
    </Container>
  );
};
export default App;

const Container = styled.div`
  align-items: center;
  background-color: #b9adad31;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-top: 5px;
  width: 100%;
`;
