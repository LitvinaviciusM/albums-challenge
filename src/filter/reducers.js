import { setFilterValue } from './utils';

const initialState = {
  selections: {
    year: [],
    price: [],
  },
  selected: {
    year: [],
    price: [],
  },
  feed: {},
  currentHash: '',
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_PRICE_FILTER':
      return {
        ...state,
        selections: {
          ...state.selections,
          price: action.payload,
        }
      };
    case 'INIT_YEAR_FILTER':
      return {
        ...state,
        selections: {
          ...state.selections,
          year: action.payload,
        }
      };
    case 'TOGGLE_FILTER_SELECTION':
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.payload.variant]: setFilterValue(state.selected[action.payload.variant], action.payload.value),
        },
      };
    case 'SET_FILTERED_FEED':
      return {
        ...state,
        feed: {
          ...state.feed,
          [action.payload.hash]: action.payload.filtered,
        },
        currentHash: action.payload.hash,
      };
    case 'SET_CURRENT_HASH':
      return {
        ...state,
        currentHash: action.payload,
      };
    default:
      return state;
  }
};
