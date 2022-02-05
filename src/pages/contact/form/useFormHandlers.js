import { useDebouncedCallback } from "use-debounce";

const useFormHandlers = ({
  setShouldReset,
  setIsSubmitted,
  handleChange,
  setTouched,
  touched,
}) => {
  const onChangeHandler = (name) => (event) => {
    setShouldReset(false);
    setIsSubmitted(false);
    handleChange(name)(event.target.value);
    setTouched({ ...touched, [name]: true }, true);
  };

  const debouncedSurnameHandler = useDebouncedCallback(
    onChangeHandler("surname"),
    250,
    {
      trailing: true,
    }
  );

  const debouncedNameHandler = useDebouncedCallback(
    onChangeHandler("name"),
    250,
    {
      trailing: true,
    }
  );

  const debouncedEmailHandler = useDebouncedCallback(
    onChangeHandler("email"),
    250,
    {
      trailing: true,
    }
  );

  const debouncedPhoneHandler = useDebouncedCallback(
    onChangeHandler("phone"),
    250,
    {
      trailing: true,
    }
  );

  const debouncedCommentHandler = useDebouncedCallback(
    onChangeHandler("comment"),
    250,
    {
      trailing: true,
    }
  );

  return {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedEmailHandler,
    debouncedPhoneHandler,
    debouncedCommentHandler,
  };
};

export default useFormHandlers;
