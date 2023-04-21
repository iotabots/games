import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Courier New, monospace",
  },
  palette: {
    mode: 'dark',
    primary: {
      light: "#00ff33",
      main: "#00cc2a",
      dark: "#009926",
      contrastText: "#000",
    },
    secondary: {
      light: "#757ce8",
      main: "#2b2b2b",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     textTransform: "none",
      //     backgroundColor: "#2b2b2b",
      //     color: "#00ff33",
      //     border: "1px solid #00ff33",
      //     "&:hover": {
      //       backgroundColor: "#404040",
      //       borderColor: "#00ff33",
      //     },
      //   },
      // },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#00ff33",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#00ff33",
          },
        },
      },
    },
  },
});
