import CustomAlert from "./formStatusMessage/CustomAlert";

const FormStatusMessage = ({
  isValid,
  isSubmitted,
  errorMessage,
  successMessage,
}) => {
  console.log(isValid, isSubmitted);

  return (
    <>
      {isValid ? null : (
        <CustomAlert severity="error">{errorMessage}</CustomAlert>
      )}
      {isSubmitted && isValid ? (
        <CustomAlert severity="success">{successMessage}</CustomAlert>
      ) : null}
    </>
  );
};

export default FormStatusMessage;
