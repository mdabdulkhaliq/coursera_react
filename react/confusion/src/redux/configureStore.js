import { createStore, combineReducers } from "redux";
import { dishesReducer } from "./dishesReducer";
import { commentsReducer } from "./commentsReducer";
import { leadersReducer } from "./leadersReducer";
import { promotionsReducer } from "./promotionsReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishesReducer,
      comments: commentsReducer,
      promotions: promotionsReducer,
      leaders: leadersReducer
    })
  );
  return store;
};
