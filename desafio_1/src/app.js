import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <section>
        <Sidebar />
        <Content />
      </section>
      <Footer />
    </div>
  );
};
export default App;
