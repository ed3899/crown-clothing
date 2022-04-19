import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import counterReducer from "./slices/counter-slice";
import {jsonApi} from "./query/query";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [jsonApi.reducerPath]: jsonApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    getDefaultMiddleware().concat(jsonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
