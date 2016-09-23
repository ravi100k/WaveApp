var React=require("React");
var {Link}=require('react-router');
var Navlink=require('./Navlink')
var Navbar=React.createClass({

  render: function() {
    return (
      <ul className="topnav">
      <li><Navlink to="/Home">Home</Navlink></li>
      <li><Navlink to ="/AddBatch">New Batch</Navlink></li>
      <li><Navlink to ="/Display">Show Details</Navlink></li>
      </ul>
    )
  }
});
module.exports = Navbar;
