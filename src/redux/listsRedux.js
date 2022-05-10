import shortid from "shortid";

function listsReducer(statePart = [], action) {
  switch (action.type) {
    case "ADD_LIST":
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;
