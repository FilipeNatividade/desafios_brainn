import styled from "styled-components";

const Paragraph = ({ children }) => {
  return <ParagraphTag>{children}</ParagraphTag>;
};
export default Paragraph;

const ParagraphTag = styled.p`
  margin: 0 auto;
  margin-top: 15px;
  width: 85%;
`;
