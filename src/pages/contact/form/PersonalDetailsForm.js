import Input from "components/Input";
import SubFormContainer from "components/SubFormContainer";

const PersonalDetailsForm = ({
  inputsErrorsSettings,
  handleBlur,
  shouldReset,
  handlers,
}) => {
  const {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedEmailHandler,
    debouncedPhoneHandler,
  } = handlers;

  return (
    <SubFormContainer>
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
    </SubFormContainer>
  );
};

export default PersonalDetailsForm;
