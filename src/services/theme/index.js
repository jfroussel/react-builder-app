import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#f06292",
    },
  },
  status: {
    danger: pink,
  },
});

export default theme;
