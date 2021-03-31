import { combineReducers } from 'redux';

import { contactsReducer } from './contacts';

const reducer = combineReducers({
  contactsReducer,
});

export default reducer;
