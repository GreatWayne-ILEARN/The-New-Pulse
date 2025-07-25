import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookmarksReducer from './bookmarksSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookmarks'],
};

const persistedReducer = persistReducer(persistConfig, bookmarksReducer);

export const store = configureStore({
  reducer: {
    bookmarks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;