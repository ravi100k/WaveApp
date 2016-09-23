var mongoose=require("mongoose");
var Schema =mongoose.Schema;

var wave= new Schema({

  waveName: String,
  waveType: String,
  Location: String,
  NumberOfParticipants: Number,
  plannedStartDate: String,
  plannedEndDate: String,
  actualStartDate:String,
  actualEndDate:String,
  ParticipantsMovingOut: Number

});
module.exports=mongoose.model('waveCollections',wave);
