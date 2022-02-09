import FormStatusMessage from "components/FormStatusMessage";
import PersonalDetailsForm from "pages/signUp/form/PersonalDetailsForm";
import AccountDetailsForm from "pages/signUp/form/AccountDetailsForm";
import PageTitle from "components/PageTitle";
import { Grid, Button, Box } from "@mui/material";
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
    <Box component={"form"} method="POST" action="" onSubmit={handleSubmit}>
      <Grid container alignItems="flex-start">
        <PageTitle>Crear cuenta</PageTitle>
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
        <FormStatusMessage
          isValid={isValid}
          isSubmitted={isSubmitted}
          errorMessage="Complete los campos requeridos(*) y/o resuelva los errores en el formulario."
          successMessage="Registro exitoso."
        />
        <Grid item xs={12} alignContent="flex-start">
          <Button type="submit" disabled={isSubmitting}>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
