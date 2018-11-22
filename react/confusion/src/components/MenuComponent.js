import React, { Component } from "react";
//import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
    console.log("1. Menu Component Constructor called");
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
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

  static getDerivedStateFromProps() {
    console.log("2. Menu Component getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("4. Menu Component componentDidMount called");
  }

  render() {
    console.log("3. Menu Component render called");
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-3 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg
              width="20%"
              height="20%"
              src={dish.image}
              alt={dish.name}
            />
            <CardImgOverlay className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
