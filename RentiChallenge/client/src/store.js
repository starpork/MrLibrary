import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const initialState = {};

const middleware = [thunk];

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
//const store = createStore(rootReducer, composeEnhancers(
  //applyMiddleware(...middleware)
//),composeWithDevTools());

const composedEnhancer = compose(applyMiddleware(thunk), composeWithDevTools())
const store = createStore(rootReducer, composedEnhancer );

export default store