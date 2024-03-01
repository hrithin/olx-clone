const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required:[true,"Please Provide a name"],

    },
    email :{
        type:String,
        required :true,
        unique:[true],
    },
    phone :{
        type:String,
        required :true,

    },
    password :{
        type:String,
        required:true,
        minlength:6,
    },
    usertype:{
        type :String,
        default : 'user',
        required:true,

    }
});


userSchema.pre('save', async function (next) {
    try {
        // Check if the password is modified or is new
        if (!this.isModified('password')) {
            return next();
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(this.password, 2);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});


module.exports = mongoose.model("olxusers",userSchema);