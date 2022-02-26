import PageContainer from "components/PageContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Form from "./signUp/Form";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const idRegex = /^([1-9]{1}[0-9]?){1}[.]?([0-9]{3})[.]?([0-9]{3})$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]+$/;

  const errorMessages = {
    emailInvalidFormat: "Formato válido abc@ejemplo.com",
    idInvalidFormat: "Formato válido 11.111.111",
    required: "Campo requerido",
    minLength: "Debe tener un minimo de seis caracteres",
    maxLength: "Debe tener como máximo diez caracteres",
    rePasswordDoesNotMatch: "No coincide con la contraseña ingresada",
    passwordInvalid:
      "La contraseña debe tener minúsculas, mayúsculas y números, sin caracteres especiales",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(errorMessages.emailInvalidFormat)
      .required(errorMessages.required),
    surname: Yup.string().required(errorMessages.required),
    name: Yup.string().required(errorMessages.required),
    password: Yup.string()
      .matches(passwordRegex, errorMessages.passwordInvalid)
      .required(errorMessages.required)
      .min(6, errorMessages.minLength)
      .max(10, errorMessages.maxLength),
    rePassword: Yup.string()
      .required(errorMessages.required)
      .oneOf([Yup.ref("password"), null], errorMessages.rePasswordDoesNotMatch),
    id: Yup.string()
      .matches(idRegex, errorMessages.idInvalidFormat)
      .required(errorMessages.required),
  });

  const handleSubmitting = (value, error) => {
    setShouldReset(true);
    error.resetForm();
    setIsSubmitted(true);
    console.log("values", value);
    console.log("error", error);
  };

  return (
    <PageContainer>
      <Formik
        initialValues={{
          surname: "",
          name: "",
          id: "",
          email: "",
          password: "",
          rePassword: "",
        }}
        onSubmit={handleSubmitting}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          isValid,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          setTouched,
        }) => (
          <Form
            shouldReset={shouldReset}
            setShouldReset={setShouldReset}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            setTouched={setTouched}
            errors={errors}
            touched={touched}
            isValid={isValid}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )}
      </Formik>
    </PageContainer>
  );
};

export default SignUp;
