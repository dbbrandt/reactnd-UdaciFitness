import { RECEIVE_ENTRIES, ADD_ENTRY } from "../actions";

function entries(state = {}, action) {
  console.log('Reducer entries state: ', state);
  console.log('Reducer entries state: ', state);
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      };
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry
      };
  }
}

export default entries;
