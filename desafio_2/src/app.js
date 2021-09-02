import Header from "./components/header";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

const dogs = [
  {
    id: 1,
    name: "Beagle",
    content:
      "https://static1.patasdacasa.com.br/articles/5/14/55/@/6702-cachorro-beagle-a-raca-pode-apresentar-articles_media_mobile-2.jpg",
  },
  {
    id: 2,
    name: "Rotwailer",
    content:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/%2801%29_Rottweiler_5830118718_ce2570e348_o.jpg",
  },
  {
    id: 3,
    name: "Pitbull",
    content:
      "https://www.petlove.com.br/images/breeds/193221/profile/original/pitbull-p.jpg?1532539293",
  },
  {
    id: 4,
    name: "Pastor alemão",
    content:
      "https://blog.casadoprodutor.com.br/wp-content/uploads/2019/07/pastor-alem%C3%A3o.jpg",
  },
  {
    id: 5,
    name: "Bulldog inglês",
    content:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReZwynxIkl4DJq_SNNicQ2QqVgfPxw2h0qQ&usqp=CAU",
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Menu />
      <section>
        <Sidebar arr={dogs}/>
        <Content arr={dogs}/>
      </section>
      <Footer />
    </div>
  );
};
export default App;
