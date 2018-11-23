import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  componentDidMount() {
    console.log("DishDetailComponent componentDidMount called");
  }

  componentDidUpdate() {
    console.log("DishDetailComponent componentDidUpdate called");
  }

  renderDish(dish) {
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

  renderComments(comments) {
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
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    console.log("DishDetailComponent render called");
    var comments;
    if (this.props.dish != null) {
      comments = this.props.dish.comments;
    } else {
      comments = null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
