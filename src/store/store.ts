import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

const configureStore = (): Store => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
