import { ThemeProvider, createTheme } from "@material-ui/core";
import { yellow, grey } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: yellow[800]
    }
  },
  status: {
    danger: yellow[500]
  }
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
