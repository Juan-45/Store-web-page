import {
  Container,
  FacebookIconButton,
  InstagramIconButton,
  TwitterIconButton,
  WhatsappIconButton,
} from "./socialNetworkButtons/CustomComponents";
import Message from "components/Message";
import useMessage from "components/message/useMessage";

const SocialNetworkButtons = () => {
  const { messageSettings, setOpen, setMessageSettings, open, handleClose } =
    useMessage();

  const handleCLick = () => {
    setOpen(true);
    setMessageSettings({
      title: "Redes sociales",
      text: "Se redireccionará a la página de la red social.",
    });
  };

  return (
    <>
      <Message
        open={open}
        handleClose={handleClose}
        messageSettings={messageSettings}
      />
      <Container>
        <FacebookIconButton onClick={handleCLick} />
        <InstagramIconButton onClick={handleCLick} />
        <TwitterIconButton onClick={handleCLick} />
        <WhatsappIconButton onClick={handleCLick} />
      </Container>
    </>
  );
};

export default SocialNetworkButtons;
