import TextArea from "components/TextArea";
import useHandlers from "./form/useHandlers";
import PersonalDetailsForm from "./form/PersonalDetailsForm";
import SubFormContainer from "components/SubFormContainer";
import FormWrapper from "components/FormWrapper";

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
    <FormWrapper
      formTitle="Contacto"
      successMessage="El mensaje fue enviado con éxito."
      handleSubmit={handleSubmit}
      isValid={isValid}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    >
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
    </FormWrapper>
  );
};

export default Form;
