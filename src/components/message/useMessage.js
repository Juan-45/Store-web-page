import { useState, useCallback } from "react";

const useMessage = () => {
  const [messageSettings, setMessageSettings] = useState({
    title: "",
    text: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  return {
    messageSettings,
    setOpen,
    setMessageSettings,
    open,
    handleClose,
  };
};

export default useMessage;
