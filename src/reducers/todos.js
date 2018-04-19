import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  COMPLETED_TODO,
  DELETED_TODO,
  DELETED_ALL_COMPLETED_TODO,
} from '../actions/todos';

const initialState = {
  data: [],
  error: null,
  isFetched: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return state;
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: action.data,
      };
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        isFetched: true,
        error: action.error,
      };
    case CREATE_TODO:
      return state;
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: [...state.data, action.data],
      };
    case CREATE_TODO_ERROR:
      return {
        ...state,
        isFetched: true,
        error: action.error,
      };
    case COMPLETED_TODO:
      return state.map(
        todo =>
          (todo.id === action.id
            ? {
              ...todo,
              completed: !todo.completed,
            }
            : todo),
      );
    case DELETED_TODO:
      return state.filter(todo => todo.id !== action.id);
    case DELETED_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
