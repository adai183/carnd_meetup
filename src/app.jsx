var React = require('react');
var ReactDOM = require('react-dom');
var Register = require('./register');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var App = React.createClass({
  getInitialState: function () {
    return {
      items: {},
      loaded: false
    }
  },
  render: function() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
            <h2 className="text-center">
              Let's come together udacious people
            </h2>
        </div>
      </div>
      <Register/>

    </div>

  },
  handleDataLoaded: function () {
    this.setState({loaded: true})
  }
});

var routes =(
  <Router>
    <Route path="/" component={App}>

    </Route>
  </Router>
);


ReactDOM.render(routes, document.querySelector('.container'));
