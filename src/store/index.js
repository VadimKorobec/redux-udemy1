import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducer";

const enhancer = devToolsEnhancer();

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: [],
  //   blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
