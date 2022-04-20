import FormWrapper from "components/FormWrapper";
import FormRow from "components/FormRow";
import Subtitle from "components/Subtitle";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
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

  return (
    <FormWrapper
      formTitle="Crear cuenta"
      successMessage="Registro exitoso."
      handleSubmit={handleSubmit}
      isValid={isValid}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    >
      <Subtitle>Información Personal</Subtitle>
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
          label="DNI"
          required
          onChange={debouncedIdHandler}
          onBlur={handleBlur("id")}
          error={inputsErrorsSettings.id}
          helperText={inputsErrorsSettings.id}
          shouldReset={shouldReset}
        />
      </FormRow>
      <Subtitle>Información de Inicio de Sesión</Subtitle>
      <FormRow>
        <PasswordInput
          label="Contraseña"
          required
          onChange={debouncedPasswordHandler}
          onBlur={handleBlur("password")}
          error={inputsErrorsSettings.password}
          helperText={inputsErrorsSettings.password}
          shouldReset={shouldReset}
          id="password"
        />
        <PasswordInput
          label="Repetir contraseña"
          required
          onChange={debouncedRePasswordHandler}
          onBlur={handleBlur("rePassword")}
          error={inputsErrorsSettings.rePassword}
          helperText={inputsErrorsSettings.rePassword}
          shouldReset={shouldReset}
          id="rePassword"
        />
      </FormRow>
      <FormRow>
        <Input
          label="Correo electrónico"
          required
          onChange={debouncedEmailHandler}
          onBlur={handleBlur("email")}
          error={inputsErrorsSettings.email}
          helperText={inputsErrorsSettings.email}
          shouldReset={shouldReset}
        />
      </FormRow>
    </FormWrapper>
  );
};

export default Form;
