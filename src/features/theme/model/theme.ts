import { 
  createTheme, 
  Theme 
} from '@mui/material/styles';

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#23262f',
      completedPaper: '#2b6e6233',
    },
  },
});