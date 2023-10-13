import { useMemo } from 'react';
import { createTheme, PaletteOptions } from '@mui/material/styles';

import customTheme from './customTheme';

const { colors } = customTheme;

const useMuiTheme = () => {
  const themeOptions: PaletteOptions = {
    primary: {
      main: colors.blue['500'],
    },
  };

  return useMemo(
    () =>
      createTheme({
        palette: themeOptions,
        components: {},
      }),
    [],
  );
};

export default useMuiTheme;
