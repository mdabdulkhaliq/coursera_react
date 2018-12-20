import { createStore, combineReducers, applyMiddleware } from "redux";
import { dishesReducer } from "./dishesReducer";
import { commentsReducer } from "./commentsReducer";
import { leadersReducer } from "./leadersReducer";
import { promotionsReducer } from "./promotionsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishesReducer,
      comments: commentsReducer,
      promotions: promotionsReducer,
      leaders: leadersReducer
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
