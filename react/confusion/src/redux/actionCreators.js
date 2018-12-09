import * as ActionTypes from "./actionTypes";

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
