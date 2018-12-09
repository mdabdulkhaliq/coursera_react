import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./actionTypes";

export const commentsReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log("Comment is " + JSON.stringify(comment));
      return state.concat(comment);
    default:
      return state;
  }
};
