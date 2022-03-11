import { useState } from "react";

const useMessage = () => {
  const [messageSettings, setMessageSettings] = useState({
    title: "",
    text: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return {
    messageSettings,
    setOpen,
    setMessageSettings,
    open,
    handleClose,
  };
};

export default useMessage;
