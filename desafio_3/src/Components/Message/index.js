import { Container, Modal } from "./style";

const Message = ({ text }) => {
  return (
    <Container>
      <Modal>{text}</Modal>
    </Container>
  );
};
export default Message;
