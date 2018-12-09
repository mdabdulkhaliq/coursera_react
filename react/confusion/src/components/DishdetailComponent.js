import React from "react";
import CommentForm from "./CommentForm";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div />;
  }
}

function RenderComments({ comments, addCommentToState, dishId }) {
  console.log("31: Dish Id is " + dishId);
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(commentObject => {
            let commentDate = new Date(commentObject.date);
            var monthNames = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];
            var day = commentDate.getDate();
            var monthIndex = commentDate.getMonth();
            var year = commentDate.getFullYear();
            return (
              <div key={commentObject.id}>
                <li className="m-3">{commentObject.comment}</li>
                <li className="m-3">
                  -- {commentObject.author}, {monthNames[monthIndex]} {day},{" "}
                  {year}
                </li>
              </div>
            );
          })}
        </ul>
        <CommentForm dishId={dishId} addCommentToState={addCommentToState} />
      </div>
    );
  } else {
    return <div />;
  }
}

const DishDetail = props => {
  if (props.dish != null) {
    console.log("77: DishId is " + props.dish.id);
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              addCommentToState={props.addCommentToState}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
