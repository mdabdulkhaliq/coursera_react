import * as ActionTypes from "./actionTypes";
import { DISHES } from "../shared/dishes";

//Action creators are used to create actions
//This action will have a type and a payload which will be the state.
export const addCommentActionCreator = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

//function returning a function
//thunk will return a function instead of an action
export const fetchDishesActionCreator = () => dispatch => {
  dispatch(dishesLoadingActionCreator(true));
  setTimeout(() => {
    dispatch(addDishesActionCreator(DISHES));
  }, 2000);
};

export const dishesLoadingActionCreator = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailedActionCreator = errormessage => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errormessage
});

export const addDishesActionCreator = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
