var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Customer = new Schema({
    Name    : String,
    Mobile    : String,
    Phone : String,
    Address: [
    {FlatNo: Number, Street: Number, State: String, PinCode: Number }
    ],
    DOB: Date,
    Email: String

});

mongoose.model( 'Customer', Customer );
mongoose.connect( 'mongodb://localhost/Customer' );
