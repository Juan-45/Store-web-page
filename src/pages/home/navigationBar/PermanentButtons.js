import Container from "./permanentButtons/Container";
import { useNavigate } from "react-router-dom";
import Message from "components/Message";
import useMessage from "components/message/useMessage";
import PermanentButtonsGroup from "./permanentButtons/PermanentButtonsGroup";
import { memo, useCallback } from "react";

const PermanentButtons = () => {
  const navigate = useNavigate();

  const handleHomeButton = useCallback(
    () => navigate("/Store-web-page", { replace: true }),
    [navigate]
  );

  const { messageSettings, setOpen, setMessageSettings, open, handleClose } =
    useMessage();

  const handleUserOptionsButton = useCallback(() => {
    setOpen(true);
    setMessageSettings({
      title: "Opciones de Usuario",
      text: "Se abrira la página de Opciones de Usuario",
    });
  }, [setMessageSettings, setOpen]);

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

export default memo(PermanentButtons);
