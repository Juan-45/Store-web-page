import HomeIcon from "@mui/icons-material/Home";
import MobileButton from "../MobileButton";
import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from "components/Alert";
import useAlert from "components/alert/useAlert";

const SideButtons = ({ sx }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/Store-web-page", { replace: true });

  const { alertSettings, setOpen, setAlertSettings, open, handleClose } =
    useAlert();

  const handleUserOptions = () => {
    setOpen(true);
    setAlertSettings({
      title: "Opciones de Usuario",
      text: "Se abrira la página de Opciones de Usuario",
    });
  };

  return (
    <>
      <Alert
        open={open}
        alertSettings={alertSettings}
        handleClose={handleClose}
      />
      <Grid
        container
        alignItems="center"
        flexWrap="nowrap"
        sx={{
          width: "fit-content",
          ...sx,
        }}
      >
        <MobileButton sx={{ marginRight: "15px" }} onClick={handleClick}>
          <HomeIcon fontSize="medium" />
        </MobileButton>
        <MobileButton sx={{ marginRight: "30px" }} onClick={handleUserOptions}>
          <PersonIcon fontSize="medium" />
        </MobileButton>
      </Grid>
    </>
  );
};

export default SideButtons;
