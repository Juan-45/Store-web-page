import Input from "components/Input";
import SubFormContainer from "components/SubFormContainer";
import Subtitle from "components/Subtitle";

const PersonalDetailsForm = ({
  inputsErrorsSettings,
  handleBlur,
  shouldReset,
  handlers,
}) => {
  const { debouncedSurnameHandler, debouncedNameHandler, debouncedIdHandler } =
    handlers;
  return (
    <SubFormContainer>
      <Subtitle>Información Personal</Subtitle>
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
        label="DNI"
        required
        onChange={debouncedIdHandler}
        onBlur={handleBlur("id")}
        error={inputsErrorsSettings.id}
        helperText={inputsErrorsSettings.id}
        shouldReset={shouldReset}
      />
    </SubFormContainer>
  );
};

export default PersonalDetailsForm;
