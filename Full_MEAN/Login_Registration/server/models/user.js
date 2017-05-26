var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: "Your first name is required!", minlength: 1},
    last_name: {type: String, required: "Your last name is required!", minlength: 1},
    email: {type: String, required: "Your email is required!", minlength: 1, unique: true,
            validate: {
                validator: function(value){
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
                }, message: "Invalid email, please try again!"
            },
        },
    password: {
     type: String,
     required: "A password is required!!",
     minlength: 8,
     validate: {
       validator: function( value ) {
         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
       },
       message: "Password failed validation, you must have at least 1 number, uppercase and special character"
     }
   },
   birthday: {type: Date, required: "You birthday is required!!"}
}, {timestamps: true})

// UserSchema.pre("save",function(next, done) {
//     var self = this;
//     mongoose.models["User"].findOne({email : self.email},function(err, results) {
//         if(err) {
//             done(err);
//         } else if(results) { //there was a result found, so the email address exists
//             self.invalidate("email","This email is already taken!");
//             done(new Error("This email is already taken!"));
//         } else {
//             done();
//         }
//     });
//     next();
// });


mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Friend'
