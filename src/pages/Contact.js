import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Alert } from "@mui/material";
import theme from "theme";
import PageContainer from "components/PageContainer";
import Input from "components/Input";
import { Formik } from "formik";
import * as Yup from "yup";

//TODO remove pop-up error message onsubmitting
const Contact = () => {
  const phoneRegex =
    /^\(?([0-9]{3}[0-9]?){1}\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato válido abc@ejemplo.com")
      .required("Campo requerido"),
    surname: Yup.string().required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    comment: Yup.string().required("Campo requerido"),
    phone: Yup.string().matches(
      phoneRegex,
      "Ingrese característica con 0 y/o número sin 15 en caso de celulares"
    ),
  });

  const handleSubmitting = (value, error) => {
    error.resetForm();
    console.log("values", value);
    console.log("error", error);
  };

  return (
    <PageContainer>
      <Formik
        initialValues={{
          surname: "",
          name: "",
          phone: "",
          email: "",
          comment: "",
        }}
        onSubmit={handleSubmitting}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          setTouched,
        }) => {
          const inputsErrorsSettings = {
            surname: touched.surname && errors.surname,
            name: touched.name && errors.name,
            phone: touched.phone && errors.phone,
            email: touched.email && errors.email,
            comment: touched.comment && errors.comment,
          };
          //This work for the Chrome's autofill bug
          const onChangeHandler = (name) => (event) => {
            handleChange(name)(event.target.value);
            setTouched({ [name]: true }, true);
          };

          return (
            <Box
              component={"form"}
              method="POST"
              action=""
              onSubmit={handleSubmit}
            >
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
                      onChange={onChangeHandler("surname")}
                      onBlur={handleBlur("surname")}
                      error={inputsErrorsSettings.surname}
                      helperText={inputsErrorsSettings.surname}
                    />
                    <Input
                      label="Nombre"
                      required
                      value={values.name}
                      onChange={onChangeHandler("name")}
                      onBlur={handleBlur("name")}
                      error={inputsErrorsSettings.name}
                      helperText={inputsErrorsSettings.name}
                    />
                    <Input
                      label="E-Mail"
                      required
                      value={values.email}
                      onChange={onChangeHandler("email")}
                      onBlur={handleBlur("email")}
                      error={inputsErrorsSettings.email}
                      helperText={inputsErrorsSettings.email}
                    />
                    <Input
                      label="Teléfono"
                      value={values.phone}
                      onChange={onChangeHandler("phone")}
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
                      onChange={onChangeHandler("comment")}
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
                <Grid item xs={12} alignContent="flex-start">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    // onClick={handleSubmitButton}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        }}
      </Formik>
    </PageContainer>
  );
};

export default Contact;
