import PersonalDetailsForm from "pages/signUp/form/PersonalDetailsForm";
import AccountDetailsForm from "pages/signUp/form/AccountDetailsForm";
import FormWrapper from "components/FormWrapper";
import useHandlers from "./form/useHandlers";

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
    debouncedIdHandler,
    debouncedPasswordHandler,
    debouncedRePasswordHandler,
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
    id: touched.id && errors.id,
    email: touched.email && errors.email,
    password: touched.password && errors.password,
    rePassword: touched.rePassword && errors.rePassword,
  };

  const personalDetailsHandlers = {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedIdHandler,
  };

  const accountDetailsHandlers = {
    debouncedEmailHandler,
    debouncedPasswordHandler,
    debouncedRePasswordHandler,
  };

  return (
    <FormWrapper
      formTitle="Crear cuenta"
      successMessage="Registro exitoso."
      handleSubmit={handleSubmit}
      isValid={isValid}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    >
      <PersonalDetailsForm
        inputsErrorsSettings={inputsErrorsSettings}
        handleBlur={handleBlur}
        shouldReset={shouldReset}
        handlers={personalDetailsHandlers}
      />
      <AccountDetailsForm
        inputsErrorsSettings={inputsErrorsSettings}
        handleBlur={handleBlur}
        shouldReset={shouldReset}
        handlers={accountDetailsHandlers}
      />
    </FormWrapper>
  );
};

export default Form;
