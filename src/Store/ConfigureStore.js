import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducers";
import rootSaga from "./Sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);
export default store;