import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/Home/home';
import './styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
