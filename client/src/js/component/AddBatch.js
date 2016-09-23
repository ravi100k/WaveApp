var React= require('react');
var Display=require('./Display')
var AddChild=require("./AddChild")
var AddBatch=React.createClass({
    
    submit:function (data){
    console.log(data);
    $.ajax({
      url: "http://localhost:8080/wave/add",
      type:"POST",
      data: data,
      success: function()
      {
        console.log("data sent");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8080/wave/add", status, err.toString());
      }.bind(this)
    });
  },

  render: function () {

    return(
      <div>
      <AddChild onSubmit={this.submit}/>
      </div>
    );
  }
});
module.exports = AddBatch;
