var React=require("React");
var {Link}=require('react-router');
var Navlink=React.createClass({

  render: function() {
    return (
      <Link {...this.props} activeClassName="active"/>
    );
  }
});
module.exports = Navlink;
