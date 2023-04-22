import { createTheme } from "@mui/material/styles";

const baseHeadline = {
  fontWeight: 900,
  lineHeight: 1.1,
};

export const transition = "all 300ms cubic-bezier(0.65, 0, 0.35, 1) 0s";

export const THEME = createTheme({
  typography: {
    fontFamily: "Courier New, monospace",
    h1: { ...baseHeadline, fontSize: 64 },
    h2: baseHeadline,
    h3: baseHeadline,
    h4: baseHeadline,
    h5: baseHeadline,
    h6: baseHeadline,
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    mode: "dark",
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
    background: {
      paper: "#121212",
      default: "#181616",
    },
  },

  components: {
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
