import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const Tasks = () => {
  return (
    <div className="Tasks">
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h5">Tasks</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container>hehe</Container>
      </main>
    </div>
  );
};

Tasks.propTypes = {};

export default Tasks;
