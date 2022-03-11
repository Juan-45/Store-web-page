import GenericTitle from "components/GenericTitle";
import FormStatusMessage from "./formWrapper/FormStatusMessage";
import { Box, Button } from "@mui/material";
import { Container, ButtonContainer } from "./formWrapper/CustomComponents";

const FormWrapper = ({
  children,
  formTitle,
  successMessage,
  handleSubmit,
  isValid,
  isSubmitted,
  isSubmitting,
}) => (
  <Box component={"form"} method="POST" action="" onSubmit={handleSubmit}>
    <Container>
      <GenericTitle>{formTitle}</GenericTitle>
      {children}
      <FormStatusMessage
        isValid={isValid}
        isSubmitted={isSubmitted}
        errorMessage="Complete los campos requeridos(*) y/o resuelva los errores en el formulario."
        successMessage={successMessage}
      />
      <ButtonContainer>
        <Button type="submit" disabled={isSubmitting}>
          Enviar
        </Button>
      </ButtonContainer>
    </Container>
  </Box>
);

export default FormWrapper;
