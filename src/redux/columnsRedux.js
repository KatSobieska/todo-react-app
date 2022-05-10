import shortid from "shortid";

// selectors
export const getAllColumns = (state) => state.columns;

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
