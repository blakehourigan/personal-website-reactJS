import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {Button,Container} from '@mui/material';
import {ThemeProvider} from '@mui/system';
import './App.css';
import theme from "./styles/theme"
import Appbar from './components/appbar';
import Banner from './components/appbar/banner';


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth = "x1" sx = {{background: '#fff'}}>
        
      <Appbar/>      
      <Banner/>
        
      </Container>

    </ThemeProvider>

  );
}

export default App;
