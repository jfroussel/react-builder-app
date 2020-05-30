import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: amber,
    secondary: orange,
  },
  status: {
    danger: pink,
  },
});

export default theme;