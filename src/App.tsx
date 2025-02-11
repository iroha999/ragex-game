import RegexGame from './components/regex-game';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./styles/main.scss";

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="fullscreen-container"
        component="main"
      >
        <RegexGame />
      </Box>
    </ThemeProvider>
  );
}

export default App;
