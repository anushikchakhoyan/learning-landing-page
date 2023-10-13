import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

import customTheme from './customTheme';

const { colors } = customTheme;

const useMuiTheme = () =>
  useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colors.blue['500'],
          },
        },
        components: {},
      }),
    [],
  );

export default useMuiTheme;
