import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DragHandle from '@material-ui/icons/DragHandle';

const useStyles = makeStyles({
  card: {
    marginTop: 15,
    minWidth: 275
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: 16
    }
  },
  title: {
    fontSize: 14,
    display: 'inline'
  }
});

const Container = styled.div``;

const Task = ({ task, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <Card className={classes.card} raised={snapshot.isDragging}>
            <CardContent className={classes.content}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {task.content}
              </Typography>

              <div {...provided.dragHandleProps}>
                <DragHandle />
              </div>
            </CardContent>
          </Card>
        </Container>
      )}
    </Draggable>
  );
};
Task.defaultProps = {
  task: {
    content: ''
  }
};

Task.propTypes = {
  task: PropTypes.shape({
    content: PropTypes.string
  }),
  index: PropTypes.number.isRequired
};

export default Task;
