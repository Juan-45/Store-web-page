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
