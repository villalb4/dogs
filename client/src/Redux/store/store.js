import {createStore, applyMiddleware} from 'redux';
import {composewithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  composewithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;