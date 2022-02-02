import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Alert } from "@mui/material";
import theme from "theme";
import Input from "components/Input";

const Form = ({
  values,
  errors,
  touched,
  isValid,
  isSubmitting,
  isSubmitted,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  const inputsErrorsSettings = {
    surname: touched.surname && errors.surname,
    name: touched.name && errors.name,
    phone: touched.phone && errors.phone,
    email: touched.email && errors.email,
    comment: touched.comment && errors.comment,
  };

  return (
    <Box component={"form"} method="POST" action="" onSubmit={handleSubmit}>
      <Grid container alignItems="flex-start">
        <Grid item xs={12} sx={{ marginBottom: "25px" }}>
          <Typography
            variant="h3"
            gutterBottom
            align="left"
            sx={{
              paddingLeft: "25px",
              paddingBottom: "5px",
              borderBottom: "2px solid",
              borderBottomColor: theme.palette.ternary.main,
            }}
          >
            Contacto
          </Typography>
        </Grid>
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
              value={values.surname}
              onChange={handleChange("surname")}
              onBlur={handleBlur("surname")}
              error={inputsErrorsSettings.surname}
              helperText={inputsErrorsSettings.surname}
            />
            <Input
              label="Nombre"
              required
              value={values.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              error={inputsErrorsSettings.name}
              helperText={inputsErrorsSettings.name}
            />
            <Input
              label="E-Mail"
              required
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              error={inputsErrorsSettings.email}
              helperText={inputsErrorsSettings.email}
            />
            <Input
              label="Teléfono"
              value={values.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={inputsErrorsSettings.phone}
              helperText={inputsErrorsSettings.phone}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: { xs: "80%", md: "330px" },
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Comentario"
              required
              multiline
              minRows={6}
              value={values.comment}
              onChange={handleChange("comment")}
              onBlur={handleBlur("comment")}
              error={inputsErrorsSettings.comment}
              helperText={inputsErrorsSettings.comment}
              sx={{
                "& > .MuiFilledInput-root :first-child": {
                  paddingTop: "0px",
                },
              }}
            />
          </Box>
        </Grid>
        {isValid ? null : (
          <Alert
            severity="error"
            variant="outlined"
            sx={{
              width: { xs: "80%", md: "100%" },
              boxSizing: "border-box",
              background: theme.palette.error.traslucid,
              boxShadow: theme.shadows[16],
              marginBottom: "20px",
            }}
          >
            Resuelva los errores en el formulario antes de continuar.
          </Alert>
        )}
        {isSubmitted && isValid ? (
          <Alert
            severity="success"
            variant="outlined"
            sx={{
              width: { xs: "80%", md: "100%" },
              boxSizing: "border-box",
              background: theme.palette.success.traslucid,
              boxShadow: theme.shadows[16],
              marginBottom: "20px",
            }}
          >
            El mensaje fue enviado con éxito.
          </Alert>
        ) : null}
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
