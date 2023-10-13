import { Button, Grid } from '@mui/material';
import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Logo />
      </Grid>
      <Grid item xs={6}>
        <Nav />
      </Grid>
      <Grid item xs display="flex" alignItems="center" justifyContent="center">
        <Button variant="outlined">Get Started!</Button>
      </Grid>
    </Grid>
  );
};

export default Header;
