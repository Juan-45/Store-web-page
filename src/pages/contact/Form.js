import TextArea from "components/TextArea";
import useHandlers from "./form/useHandlers";
import SubFormContainer from "components/SubFormContainer";
import FormRow from "components/FormRow";
import FormWrapper from "components/FormWrapper";
import Input from "components/Input";

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

  return (
    <FormWrapper
      formTitle="Contacto"
      successMessage="El mensaje fue enviado con éxito."
      handleSubmit={handleSubmit}
      isValid={isValid}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    >
      <FormRow>
        <Input
          label="Apellido"
          required
          onChange={debouncedSurnameHandler}
          onBlur={handleBlur("surname")}
          error={inputsErrorsSettings.surname}
          helperText={inputsErrorsSettings.surname}
          shouldReset={shouldReset}
        />
        <Input
          label="Nombre"
          required
          onChange={debouncedNameHandler}
          onBlur={handleBlur("name")}
          error={inputsErrorsSettings.name}
          helperText={inputsErrorsSettings.name}
          shouldReset={shouldReset}
        />
      </FormRow>
      <FormRow>
        <Input
          label="E-Mail"
          required
          onChange={debouncedEmailHandler}
          onBlur={handleBlur("email")}
          error={inputsErrorsSettings.email}
          helperText={inputsErrorsSettings.email}
          shouldReset={shouldReset}
        />
        <Input
          label="Teléfono"
          onChange={debouncedPhoneHandler}
          onBlur={handleBlur("phone")}
          error={inputsErrorsSettings.phone}
          helperText={inputsErrorsSettings.phone}
          shouldReset={shouldReset}
        />
      </FormRow>
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
