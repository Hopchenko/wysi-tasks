const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'make homework' },
    'task-2': { id: 'task-2', content: 'make dinner' },
    'task-3': { id: 'task-3', content: 'cleaning' },
    'task-4': { id: 'task-4', content: 'having rest' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'to-do',
      tasksIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
};

function rootReducer(state = initialState) {
  return state;
}

export default rootReducer;
