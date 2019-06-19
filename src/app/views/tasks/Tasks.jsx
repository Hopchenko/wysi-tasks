import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';

import './Tasks.scss';
import WysiCard from '../../components/wysi-card/WysiCard';

const useStyles = makeStyles(theme => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const Tasks = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'asdasdasd',
      title: 'hop'
    },
    {
      id: 2,
      text: 'asdasdasd',
      title: 'hop'
    },
    {
      id: 3,
      text: 'asdasdasd',
      title: 'hop'
    },
    {
      id: 4,
      text: 'asdasdasd',
      title: 'hop'
    },
    {
      id: 5,
      text: 'asdasdasd',
      title: 'hop'
    }
  ]);
  const classes = useStyles();

  const addTaskHandler = () => {
    setTasks([...tasks, { id: 6, text: 'test', title: 'new' }]);
  };

  return (
    <div className="Tasks">
      <AppBar position="relative" color="primary" className="tasks-header">
        <Toolbar>
          <Typography variant="h5">Tasks</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container>
          <Grid container spacing={4}>
            {tasks.map(task => (
              <Grid item key={task.id} xs={12} sm={6} md={4}>
                <WysiCard taskText={task.text} name={task.title} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Fab
          color="secondary"
          aria-label="Add"
          onClick={addTaskHandler}
          className={classes.addButton}
        >
          <AddIcon />
        </Fab>
      </main>
    </div>
  );
};

Tasks.propTypes = {};

export default Tasks;
