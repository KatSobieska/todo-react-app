import shortid from "shortid";

// selectors
export const getAllColumns = (state) => state.columns;

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// actions
const ADD_COLUMN = "app/lists/ADD_COLUMN";

// actions creators

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
