import Title from "../title";

const Content = ({ stateTitle, stateArticle}) => {

  return (
    <main>
      <Title valueH={2}>{stateTitle}</Title>
      <br/>

      <img src={stateArticle} alt={stateTitle} />
    </main>
  );
};
export default Content;
