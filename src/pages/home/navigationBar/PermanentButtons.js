import Container from "./permanentButtons/Container";
import { useNavigate } from "react-router-dom";
import Message from "components/Message";
import useMessage from "components/message/useMessage";
import PermanentButtonsGroup from "./permanentButtons/PermanentButtonsGroup";

const PermanentButtons = () => {
  const navigate = useNavigate();

  const handleHomeButton = () => navigate("/Store-web-page", { replace: true });

  const { messageSettings, setOpen, setMessageSettings, open, handleClose } =
    useMessage();

  const handleUserOptionsButton = () => {
    setOpen(true);
    setMessageSettings({
      title: "Opciones de Usuario",
      text: "Se abrira la página de Opciones de Usuario",
    });
  };

  return (
    <>
      <Message
        open={open}
        messageSettings={messageSettings}
        handleClose={handleClose}
      />
      <Container>
        <PermanentButtonsGroup
          handleHomeButton={handleHomeButton}
          handleUserOptionsButton={handleUserOptionsButton}
        />
      </Container>
    </>
  );
};

export default PermanentButtons;
