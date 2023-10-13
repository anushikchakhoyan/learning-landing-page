import { styled } from '@mui/material/styles';

export const ErrorPageWrapper = styled('div')`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '38px',
  padding: '20px 0',
  fontWeight: 700,
}));

export const Text = styled('p')(() => ({
  fontSize: '20px',
  padding: '6px 0',
}));
