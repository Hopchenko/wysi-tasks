import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Box } from '@material-ui/core';

import Task from './Task';

const StyledBox = styled(Box)`
  padding: 5px;
  flex: 1;
  margin-top: 15px;
`;

const StyledPaper = styled(Paper)`
  margin: 10px;
  padding: 15px;
  min-height: 100px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

class Column extends React.Component {
  static propTypes = {
    column: PropTypes.shape({
      title: PropTypes.string
    }),
    tasks: PropTypes.array,
    colIndex: PropTypes.number.isRequired
  };

  static defaultProps = {
    column: { title: '' },
    tasks: []
  };

  render() {
    const { column, tasks, colIndex } = this.props;
    return (
      <Draggable draggableId={column.id} index={colIndex}>
        {colProvided => (
          <StyledPaper
            {...colProvided.draggableProps}
            ref={colProvided.innerRef}
          >
            <Typography
              variant="h5"
              component="h3"
              {...colProvided.dragHandleProps}
            >
              {column.title}
            </Typography>
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <StyledBox
                  boxShadow={snapshot.isDraggingOver ? 1 : 0}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </StyledBox>
              )}
            </Droppable>
          </StyledPaper>
        )}
      </Draggable>
    );
  }
}

export default Column;
