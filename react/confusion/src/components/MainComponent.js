import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
import { connect } from "react-redux";
import {
  addCommentActionCreator,
  fetchDishesActionCreator
} from "../redux/actionCreators";

//State from redux will be available as properties listed
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

//We will make dispatchers available as properties to be used by application to invoke a dispatcher
const mapDispatchToProps = dispatch => ({
  addCommentToState: (dishId, rating, author, comment) =>
    dispatch(addCommentActionCreator(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishesActionCreator());
  }
});

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errorMessage={this.props.dishes.errorMessage}
          promotion={this.props.promotions.filter(promo => promo.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    //Route will send match, location and history
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errorMessage={this.props.dishes.errorMessage}
          comments={this.props.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addCommentToState={this.props.addCommentToState}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent)
);
