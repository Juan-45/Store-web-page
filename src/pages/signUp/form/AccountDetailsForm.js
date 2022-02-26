import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
import SubFormContainer from "components/SubFormContainer";
import Subtitle from "components/Subtitle";

const PersonalDetailsForm = ({
  inputsErrorsSettings,
  handleBlur,
  shouldReset,
  handlers,
}) => {
  const {
    debouncedEmailHandler,
    debouncedPasswordHandler,
    debouncedRePasswordHandler,
  } = handlers;
  return (
    <SubFormContainer>
      <Subtitle>Información de Inicio de Sesión</Subtitle>
      <Input
        label="Correo electrónico"
        required
        onChange={debouncedEmailHandler}
        onBlur={handleBlur("email")}
        error={inputsErrorsSettings.email}
        helperText={inputsErrorsSettings.email}
        shouldReset={shouldReset}
      />
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
    </SubFormContainer>
  );
};

export default PersonalDetailsForm;
