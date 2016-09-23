var React= require('react');
var AddChild=React.createClass({
  getInitialState:function(){
      return ({data1:"",data2:"",data3:"",data4:"",data5:"",data6:""})
    },

  handleChange1: function(event){
    return(
      this.setState({data1:event.target.value})
    )},
    handleChange2: function(event){
      return(
        this.setState({data2:event.target.value})
      )},
      handleChange3: function(event){
        return(
          this.setState({data3:event.target.value})
        )},
        handleChange4: function(event){
          return(
            this.setState({data4:event.target.value})
          )},
          handleChange5: function(event){
            return(
              this.setState({data5:event.target.value})
            )},
            handleChange6: function(event){
              return(
                this.setState({data6:event.target.value})
              )},


                submit:function(){

                data={"waveName": this.state.data1 ,"waveType": this.state.data2 ,"Location" : this.state.data3 ,"NumberOfParticipants" : this.state.data4 , "plannedStartDate" : this.state.data5 , "plannedEndDate" : this.state.data6 };
                this.props.onSubmit(data)
                console.log("here");
              },


              render: function () {

                return(
                  <div id='heading'>
                  <h1> Add new Batch </h1>
                  <div id='form'>
                  Batch Name: <input type='text' placeholder='Batch Name'  onChange={this.handleChange1}/>
                  Batch Type: <input type='text' placeholder='Batch Type'  onChange={this.handleChange2}/>
                  Location: <input type='text' onChange={this.handleChange3}/>
                  Number OF Participants: <input type='number' onChange={this.handleChange4}/>
                  Planned Start Date: <input type='date'   onChange={this.handleChange5}/>
                  Planned End Date: <input type='date'  onChange={this.handleChange6}/>
                  <input type='submit' value='Submit Data'  onClick={this.submit}/>
                  </div>
                  </div>
                );
              }
            });

            module.exports =AddChild;
