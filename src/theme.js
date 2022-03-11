import { createTheme } from "@mui/material/styles";
import "Niconne.css";

const theme = createTheme({
  palette: {
    //blue
    primary: {
      main: "#0089ff",
      light: "#4faeff",
      dark: "#0062b5",
    },
    //gray
    secondary: {
      main: "#636363",
      dark: "#3c3c3c",
      light: "#e2e2e2",
      hover: "#c4c4c4",
    },
    //green
    ternary: {
      main: "#6db733",
      light: "#c0d0b3",
    },

    text: {
      primary: "#ffffff",
      secondary: "#444444",
    },
    //darker grey
    background: {
      dark: "#2d2d2d",
      default: "#747474",
      defaultTraslucid: "#747474e6",
      light: "#f2f2f2",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960, //smartphonePortrait
      lg: 1366,
      xl: 1920, //desktop
    },
  },

  borders: {
    main: "1px solid #0089ff80",
  },
});

theme.typography.fontFamily = [...theme.typography.fontFamily, "Niconne"];

theme.palette = {
  ...theme.palette,
  error: {
    ...theme.palette.error,
    traslucid: "#ef535045", //RGBA => A= 0.27
  },
  success: {
    ...theme.palette.success,
    traslucid: "#2e7d3245",
  },
};

//Name of the component (MuiTypography)
//Name of the slot (root, h1, h2, etc)
theme.components = {
  MuiTextField: {
    defaultProps: {
      variant: "filled",
      size: "small",
      fullWidth: true,
    },
    styleOverrides: {
      root: { marginBottom: "20px" },
    },
  },

  MuiButtonGroup: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      contained: {
        boxShadow: theme.shadows[16],
      },
    },
  },

  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[16],
      },
      outlined: {
        boxShadow: "unset",
      },
    },
  },

  MuiMenu: {
    variants: [
      {
        props: { variant: "blue" },
        style: {
          "& .MuiMenu-paper": {
            borderRadius: "0",
            background: theme.palette.primary.main,
            width: "100vw",
            position: "fixed",
            top: "0 !important",
            left: "0 !important",
            right: "0 !important",
          },

          "& .MuiMenuItem-root": {
            paddingTop: "16px",
            paddingBottom: "16px",
          },
          "& .MuiMenuItem-root:hover": {
            background: theme.palette.primary.dark,
          },
        },
      },
      {
        props: { variant: "navMenu" },
        style: {
          pointerEvents: "none",
          "& .MuiMenu-paper": {
            borderRadius: "0",
            background: theme.palette.primary.light,
            pointerEvents: "auto",
          },
          "& .MuiMenuItem-root:hover": {
            background: theme.palette.primary.main,
          },
        },
      },
    ],
  },

  MuiPaper: {
    variants: [
      {
        props: { variant: "darkShadow" },
        style: {
          boxShadow:
            "0px 8px 10px -5px rgb(0 0 0 / 60%), 0px 16px 24px 2px rgb(0 0 0 / 42%), 0px 6px 30px 5px rgb(0 0 0 / 36%)",
        },
      },
    ],
  },

  MuiIconButton: {
    variants: [
      {
        props: { variant: "mobile" },
        style: {
          background: theme.palette.primary.main,
          boxShadow: theme.shadows[16],
          "&:hover": {
            background: theme.palette.primary.dark,
          },
        },
      },
    ],
  },

  MuiTypography: {
    styleOverrides: {
      root: {
        [theme.breakpoints.up("xs")]: {
          lineHeight: 1.1,
        },

        [theme.breakpoints.up("xl")]: {
          lineHeight: 1.2,
        },
      },
      h1: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "3rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "4rem",
        },
      },
      h2: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "2.625rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "3rem",
        },
      },
      h3: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "1.75rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "2rem",
        },
      },
      body1: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "1.225rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "1.4rem",
        },
      },
      body2: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "1rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "1.225rem",
        },
      },
    },
  },

  MuiAutocomplete: {
    styleOverrides: {
      root: {
        "& .MuiFilledInput-root": {
          paddingTop: "14px",
        },
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        color: "black",
        boxShadow: theme.shadows[16],
        background: theme.palette.primary.light,
        borderRadius: "0",
        "&:hover": {
          background: theme.palette.primary.main,
        },
        "&.Mui-focused": {
          background: theme.palette.grey[400],
        },
      },
      input: {
        paddingTop: "18px",
      },
    },
  },

  MuiMobileStepper: {
    styleOverrides: {
      root: {
        background: "none",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "25px 0px",
        padding: "0px",
      },
      dot: {
        width: "15px",
        height: "15px",
        margin: "0px 15px",
        boxShadow:
          "0px 8px 10px -5px rgb(0 0 0 / 30%), 0px 16px 24px 2px rgb(0 0 0 / 21%), 0px 6px 30px 5px rgb(0 0 0 / 18%)",
      },
    },
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "1.75rem",
        },

        [theme.breakpoints.up("xl")]: {
          fontSize: "2rem",
        },
        color: theme.palette.text.secondary,
      },
    },
  },
};

export default theme;
