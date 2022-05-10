import shortid from "shortid";

// selectors

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getAllLists = (state) => state.lists;

const ADD_LIST = "app/lists/ADD_LIST";

// action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });
function listsReducer(statePart = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;
