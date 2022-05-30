import { combineReducers} from "redux";
import todoReducers from './todoReducers'
import uiReducers from './uiReducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    todos: todoReducers,
    ui: uiReducers,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default persistedReducer;