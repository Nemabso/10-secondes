import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import playReducer from "./src/Reducers/playReducer";
import gameReducer from "./src/Reducers/gameReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  playReducer: playReducer,
  gameReducer: gameReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
