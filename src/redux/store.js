import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

//   const rootReducer = combineReducers({user: userReducer})
  
  const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)

export default store