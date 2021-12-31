import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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

      /* styleOverrides: {
			// Name of the slot
			root: {
			  // Some CSS
			  fontSize: '1rem',
			},
		  },*/
    },
  },
});

export default theme;
