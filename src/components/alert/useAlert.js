import { useState } from "react";

const useAlert = () => {
  const [alertSettings, setAlertSettings] = useState({
    title: "",
    text: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return {
    alertSettings,
    setOpen,
    setAlertSettings,
    open,
    handleClose,
  };
};

export default useAlert;
