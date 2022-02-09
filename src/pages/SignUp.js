import PageContainer from "components/PageContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Form from "./signUp/Form";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const idRegex = /^([1-9]{1}[0-9]?){1}[.]?([0-9]{3})[.]?([0-9]{3})$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato válido abc@ejemplo.com")
      .required("Campo requerido"),
    surname: Yup.string().required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
    rePassword: Yup.string().required("Campo requerido"),
    id: Yup.string()
      .matches(idRegex, "Formato válido 11.111.111 o sin puntos")
      .required("Campo requerido"),
  });
  //TODO set password & rePassword validation

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
