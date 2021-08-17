import { authContext } from "@/utils/auth";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { watcherSaga } from "./sagas/rootSaga";

const initialState = {
  auth: {
    token: authContext.getToken() || ""
  }
}

export type RootState = ReturnType<typeof rootReducer>

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(rootReducer, initialState, applyMiddleware(...middleware)),
    runSaga: sagaMiddleware.run(watcherSaga)
  }
};

export default configureStore;