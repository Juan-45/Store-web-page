import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, //smartphonePortrait
      lg: 1200,
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

    // Name of the component
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.2, //To improve overflow avoidness on laptop screen
        },
        // Name of the slot
        h1: {
          fontSize: "4rem",
        },
        h2: {
          fontSize: "3rem",
        },
        h3: {
          fontSize: "2rem",
        },
        body1: {
          fontSize: "1.4rem",
        },
      },
    },
  },
});

export default theme;
