import { createStore } from 'redux';

const TODO_FORM_CHANGE = 'TODO_FORM_CHANGE';

export const updateTodoForm = text => ({
  type: TODO_FORM_CHANGE,
  value: text,
});

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_FORM_CHANGE:
      return Object.assign({}, state, { todoFormValue: action.value });
    default:
      return state;
  }
};

export const store = createStore(appReducer);


