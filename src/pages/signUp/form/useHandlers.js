import { useDebouncedCallback } from "use-debounce";

const useHandlers = ({
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
    //This work for the Chrome's autofill bug
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

  const debouncedIdHandler = useDebouncedCallback(onChangeHandler("id"), 250, {
    trailing: true,
  });

  const debouncedPasswordHandler = useDebouncedCallback(
    onChangeHandler("password"),
    250,
    {
      trailing: true,
    }
  );

  const debouncedRePasswordHandler = useDebouncedCallback(
    onChangeHandler("rePassword"),
    250,
    {
      trailing: true,
    }
  );

  return {
    debouncedSurnameHandler,
    debouncedNameHandler,
    debouncedEmailHandler,
    debouncedIdHandler,
    debouncedPasswordHandler,
    debouncedRePasswordHandler,
  };
};

export default useHandlers;
