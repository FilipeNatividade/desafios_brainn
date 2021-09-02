import Header from "./Components/header";
import Menu from "./Components/menu";
import Sidebar from "./Components/sidebar";
import Content from "./Components/content";
import Footer from "./Components/footer";

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
