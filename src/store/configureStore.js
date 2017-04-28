import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'ducks';

export default initState => createStore(
    reducers,
    initState,
    applyMiddleware(thunk),
  );
