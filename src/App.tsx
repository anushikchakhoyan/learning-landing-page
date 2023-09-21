import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import useMuiTheme from './styles/useMuiTheme';
import Home from './pages/Home';

function App() {
  const theme = useMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
