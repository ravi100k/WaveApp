var React= require('react');

var Alldisplay=React.createClass({


    render: function () {

        return (
          {this.props.waveName}
          {this.props.waveType}
          {this.props.Location}
          {this.props.NumberOfParticipants}
          {this.props.plannedStartDate}
          {this.props.plannedEndDate}
            );
          })


  });
  module.exports = Alldisplay;
