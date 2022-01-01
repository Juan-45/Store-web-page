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
    // Name of the component
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

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        h1: {
          // Some CSS
          fontSize: "4rem",
        },
        h2: {
          // Some CSS
          fontSize: "3rem",
        },
        h3: {
          // Some CSS
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
