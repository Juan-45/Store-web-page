import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, //smartphonePortrait
      lg: 1366,
      xl: 1920, //desktop
    },
  },

  components: {
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
  },
});

//Name of the component (MuiTypography)
//Name of the slot (root, h1, h2, etc)
theme.components.MuiTypography = {
  styleOverrides: {
    root: {
      [theme.breakpoints.up("xs")]: {
        lineHeight: 1,
      },

      [theme.breakpoints.up("xl")]: {
        lineHeight: 1.2,
      },
    },
    h1: {
      [theme.breakpoints.up("xs")]: {
        fontSize: "3.5rem",
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
  },
};

export default theme;
