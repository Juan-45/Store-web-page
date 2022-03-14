import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import theme from "theme";

const useDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMatching = useMediaQuery(theme.breakpoints.up("sm"));

  const shouldOpen = openDrawer && !isMatching;

  const handleFlotantButton = () => setOpenDrawer(true);

  const handleDrawerClose = () => setOpenDrawer(false);

  return { openDrawer, shouldOpen, handleFlotantButton, handleDrawerClose };
};

export default useDrawer;
