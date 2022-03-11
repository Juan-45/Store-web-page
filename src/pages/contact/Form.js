import { Box, Button } from "@mui/material";
import TextArea from "components/TextArea";
import useHandlers from "./form/useHandlers";
import GenericTitle from "components/GenericTitle";
import PersonalDetailsForm from "./form/PersonalDetailsForm";
import FormStatusMessage from "components/FormStatusMessage";
import SubFormContainer from "components/SubFormContainer";
import { Container, ButtonContainer } from "./form/CustomComponents";

const Form = ({
  shouldReset,
  errors,
  touched,
  isValid,
  isSubmitting,
  isSubmitted,
  handleSubmit,
  handleChange,
  handleBlur,
  setShouldReset,
  setIsSubmitted,
  setTouched,
}) => {
  const {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedEmailHandler,
    debouncedPhoneHandler,
    debouncedCommentHandler,
  } = useHandlers({
    setShouldReset,
    setIsSubmitted,
    handleChange,
    setTouched,
    touched,
  });

  const inputsErrorsSettings = {
    surname: touched.surname && errors.surname,
    name: touched.name && errors.name,
    phone: touched.phone && errors.phone,
    email: touched.email && errors.email,
    comment: touched.comment && errors.comment,
  };

  const handlers = {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedEmailHandler,
    debouncedPhoneHandler,
  };

  return (
    <Box component={"form"} method="POST" action="" onSubmit={handleSubmit}>
      <Container>
        <GenericTitle>Contacto</GenericTitle>
        <PersonalDetailsForm
          inputsErrorsSettings={inputsErrorsSettings}
          handleBlur={handleBlur}
          shouldReset={shouldReset}
          handlers={handlers}
        />
        <SubFormContainer>
          <TextArea
            label="Comentario"
            required
            onChange={debouncedCommentHandler}
            onBlur={handleBlur("comment")}
            error={inputsErrorsSettings.comment}
            helperText={inputsErrorsSettings.comment}
            shouldReset={shouldReset}
          />
        </SubFormContainer>
        <FormStatusMessage
          isValid={isValid}
          isSubmitted={isSubmitted}
          errorMessage="Complete los campos requeridos(*) y/o resuelva los errores en el formulario."
          successMessage="El mensaje fue enviado con éxito."
        />
        <ButtonContainer>
          <Button type="submit" disabled={isSubmitting}>
            Enviar
          </Button>
        </ButtonContainer>
      </Container>
    </Box>
  );
};

export default Form;
