import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {Button,Container} from '@mui/material';
import {ThemeProvider} from '@mui/system';
import './App.css';
import theme from "./styles/theme"
import Appbar from './components/appbar';


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth = "x1" sx = {{background: '#fff'}}>
        <Button variant = 'contained' href="https://www.google.com">About Me</Button><Button variant = 'contained' href="https://drive.google.com/file/d/18_vnfHyMkd3h6V6GSiJeLF1fmXMeRvdB/view?usp=sharing">Resume</Button><Button variant = 'contained' >Contact</Button>
      
      <Appbar/>
{
        /*
        appbar
        banner
        promotions
        title
        products/showcase
        footer 
        searchbox 
        app drawer 
        */
}       
        <p>
          Under Construction
        </p>

        
      </Container>

    </ThemeProvider>

  );
}

export default App;
