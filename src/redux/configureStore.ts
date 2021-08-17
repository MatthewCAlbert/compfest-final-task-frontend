import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { watcherSaga } from "./sagas/rootSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(rootReducer, applyMiddleware(...middleware)),
    runSaga: sagaMiddleware.run(watcherSaga)
  }
};

export default configureStore;