import axios from 'axios';
import { createReducer } from 'ducks/util';

const FETCH_SERVICES = '__FETCH_SERVICES';
const SELECT_SERVICE = '__SELECT_SERVICE';

const URL = '/api/services';

const fetchServices = () => {
  const request = axios.get(URL);

  return (dispatch) => {
    request.then((m) => {
      dispatch({
        type: FETCH_SERVICES,
        payload: m.data,
      });
    });
  };
};

const selectService = id => ({
  type: SELECT_SERVICE,
  payload: id,
});

const reducer = createReducer({ all: [], selected: {} }, {
  [FETCH_SERVICES](state, action) {
    return Object.assign({}, state, { all: action.payload });
  },
  [SELECT_SERVICE](state, action) {
    return Object.assign({}, state, { selected: action.payload });
  },
});

export default reducer;

export { fetchServices, selectService };

