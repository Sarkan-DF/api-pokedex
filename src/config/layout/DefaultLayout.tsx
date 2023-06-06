import { AppBar, Avatar, Box, Container, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Avatar alt="Pokedex" src="/images/logo-pokeball.png" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DefaultLayout;
