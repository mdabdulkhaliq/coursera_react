import { createStore, combineReducers, applyMiddleware } from "redux";
import { dishesReducer } from "./dishesReducer";
import { commentsReducer } from "./commentsReducer";
import { leadersReducer } from "./leadersReducer";
import { promotionsReducer } from "./promotionsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishesReducer,
      comments: commentsReducer,
      promotions: promotionsReducer,
      leaders: leadersReducer,
      ...createForms({ feedback: InitialFeedback })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
