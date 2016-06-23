
var mongoose = require( 'mongoose' );
var Customer     = mongoose.model( 'Customer' );

exports.index = function ( req, res, next ){

  Customer.
    find().
    //sort( '-updated_at' ).
    exec( function ( err, customer ){
      if( err ) return next( err );

      res.render( 'index', {
          title : 'Customer List',
          customer : customer
      });
    });
};
exports.create = function ( req, res, next ){
  new Customer({
      //user_id    : req.cookies.user_id,
      Name    : req.body.Name,
      Mobile    : req.body.Mobile,
      Phone    : req.body.Phone,
      DOB    : req.body.DOB,
      Email    : req.body.Email,
      Address : [{
      FlatNo    : req.body.FlatNo,
      Street    : req.body.Street,
      State    : req.body.State,
      PinCode    : req.body.PinCode }]

  }).save( function ( err, customer, count ){
    if( err ) return next( err );
   res.redirect( '/' );
  });
};


exports.destroy = function ( req, res, next ){
  Customer.findById( req.params.id, function ( err, customer ){

    customer.remove( function ( err, customer ){
      if( err ) return next( err );

      res.redirect( '/' );
    });
  });
};

exports.edit = function( req, res, next ){

   Customer.findById(req.params.id).   
    exec( function ( err, customer ){
      if( err ) return next( err );
 console.log(customer.Address.State);

       res.render( 'edit', {
        title   : 'Edit customer details',
        customer   : customer,
        current : req.param._id
      });
     });
};

exports.update = function( req, res, next ){
  Customer.findById( req.params.id, function ( err, customer ){

    customer.Name    = req.body.Name;
      customer.Mobile    = req.body.Mobile,
      customer.Phone    =req.body.Phone,
      customer.DOB    = req.body.DOB,
      customer.Email    = req.body.Email,
      customer.Address[0].FlatNo    = req.body.FlatNo,
      customer.Address[0].Street    = req.body.Street,
      customer.Address[0].State    = req.body.State,
      customer.Address[0].PinCode   = req.body.PinCode 

    customer.save( function ( err, customer, count ){
      if( err ) return next( err );

      res.redirect( '/' );
    });
  });
};

