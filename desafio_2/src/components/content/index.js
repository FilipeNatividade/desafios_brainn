import { useEffect, useState } from "react";
import Title from "../title";

const Content = ({ arr }) => {
  const [stateTitle, setStateTitle] = useState("");
  const [stateArticle, setStateArticle] = useState("");


  useEffect(() => (
    setStateTitle(arr[0].name),
    setStateArticle(arr[0].content)
  ), [arr])

  return (
    <main>
      <Title valueH={2}>{stateTitle}</Title>
      <br/>

      <img src={stateArticle} alt={stateTitle} />
    </main>
  );
};
export default Content;
