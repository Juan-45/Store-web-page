import PageContainer from "components/PageContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./contact/Form";
import { useState } from "react";

//TODO remove pop-up error message onsubmitting
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const phoneRegex =
    /^\(?([0-9]{3}[0-9]?){1}\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const errorMessages = {
    emailInvalidFormat: "Formato válido abc@ejemplo.com",
    required: "Campo requerido",
    phoneInvalid: "Ingrese característica con 0 y número sin 15",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(errorMessages.emailInvalidFormat)
      .required(errorMessages.required),
    surname: Yup.string().required(errorMessages.required),
    name: Yup.string().required(errorMessages.required),
    comment: Yup.string().required(errorMessages.required),
    phone: Yup.string().matches(phoneRegex, errorMessages.phoneInvalid),
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
          phone: "",
          email: "",
          comment: "",
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

export default Contact;
