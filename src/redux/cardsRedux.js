import shortid from "shortid";
import { strContains } from "../utils/strContains";

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getFavoriteCard = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);

// action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const toggleCardFavorite = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});

export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });

// actions

const TOGGLE_CARD_FAVORITE = "app/lists/TOGGLE_CARD_FAVORITE";
const ADD_CARD = "app/lists/ADD_CARD";
const REMOVE_CARD = "app/lists/REMOVE_CARD";

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
