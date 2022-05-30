import {createStore} from 'redux';
import persistedReducer from "../reducers";
import { persistStore} from 'redux-persist'


const store = createStore(persistedReducer)

export const persistor = persistStore(store)
export default store