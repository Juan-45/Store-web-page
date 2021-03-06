import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { memo } from "react";

const Message = ({ open, handleClose, messageSettings }) => {
  const { title, text } = messageSettings;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(Message);
