import Input from "components/Input";
import { Grid } from "@mui/material";

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
    <Grid container item xs={12} md={6} wrap="wrap">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        sx={{ width: { xs: "80%", md: "330px" } }}
      >
        <Input
          label="Apellido"
          required
          name="surname"
          onChange={debouncedSurnameHandler}
          onBlur={handleBlur("surname")}
          error={inputsErrorsSettings.surname}
          helperText={inputsErrorsSettings.surname}
          shouldReset={shouldReset}
        />
        <Input
          label="Nombre"
          required
          name="name"
          onChange={debouncedNameHandler}
          onBlur={handleBlur("name")}
          error={inputsErrorsSettings.name}
          helperText={inputsErrorsSettings.name}
          shouldReset={shouldReset}
        />
        <Input
          label="E-Mail"
          required
          name="email"
          onChange={debouncedEmailHandler}
          onBlur={handleBlur("email")}
          error={inputsErrorsSettings.email}
          helperText={inputsErrorsSettings.email}
          shouldReset={shouldReset}
        />
        <Input
          label="Teléfono"
          name="phone"
          onChange={debouncedPhoneHandler}
          onBlur={handleBlur("phone")}
          error={inputsErrorsSettings.phone}
          helperText={inputsErrorsSettings.phone}
          shouldReset={shouldReset}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetailsForm;
