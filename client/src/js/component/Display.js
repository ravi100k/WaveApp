var React= require('react');

var Display=React.createClass({

  componentDidMount:function() {

      $.ajax({
        url: 'http://localhost:8080/wave/',
        dataType: "json",
        type:'GET',
        success: function(data1)
        {
          console.log("data received"+data1);
          this.setState({data:data1});
          console.log('display data for wave');
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this),
      });
    },




  render: function () {

    var all=this.state.data.map(function(arr) {
      return (
        <Alldisplay allData={arr}
        waveName={arr.waveName}
        waveType={arr.waveType}
        Location={arr.Location}
        NumberOfParticipants={arr.NumberOfParticipants}
        plannedStartDate={arr.plannedStartDate}
        plannedEndDate={arr.plannedEndDate}/>
          );
        })

    return(
      <div>
      {all}
      </div>
    );
  }
});
module.exports = Display;
