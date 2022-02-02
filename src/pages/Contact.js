import PageContainer from "components/PageContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./contact/Form";
import { useState } from "react";

//TODO remove pop-up error message onsubmitting
//TODO add debounce
//TODO set inputs responsive width using flex shrink grow and basis
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          //This work for the Chrome's autofill bug
          const onChangeHandler = (name) => (event) => {
            setIsSubmitted(false);
            handleChange(name)(event.target.value);
            setTouched({ ...touched, [name]: true }, true);
          };

          return (
            <Form
              values={values}
              errors={errors}
              touched={touched}
              isValid={isValid}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              handleChange={onChangeHandler}
              handleBlur={handleBlur}
              isSubmitted={isSubmitted}
            />
          );
        }}
      </Formik>
    </PageContainer>
  );
};

export default Contact;
