import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { AuthAction, AuthState } from "./modules/auth/types";

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

// reducers = o que a gente ja tem do rootReducer
export default
  (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
  ) => {
    const enhancer = applyMiddleware(...middlewares);
    return createStore(reducers, enhancer);
  };