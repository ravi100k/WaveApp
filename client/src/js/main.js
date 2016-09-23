var React= require('react');
var ReactDOM=require('react-dom');
var {hasHistory, Route,Router,IndexRoute}=require('react-router');
var Home=require("./component/Home");
var Display=require("./component/Display");
var AddBatch=require("./component/AddBatch");
var Navbar=require("./component/Navbar");
var RouterMain=React.createClass({

  render: function() {
    return (
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    )
  }

})

ReactDOM.render(
  <Router history={hasHistory}>
  <Route path="/" component={RouterMain}>
  <IndexRoute component={Home}/>
  <Route path="/Home" component={Home}/>
  <Route path="/AddBatch" component={AddBatch}/>
  <Route path="/Display" component={Display}/>
  </Route>
  </Router>,document.getElementById('app2'));
