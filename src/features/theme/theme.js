import { createTheme, } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#23262f',
      completedPaper: '#2b6e6233', // Custom color for completed papers
    }
  },
});