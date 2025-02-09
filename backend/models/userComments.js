import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name should be 3 character long"],
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        minLength: [5, "Email should be 5 characters long"],
        lowercase: true,
    },
    message: {
        type: String,
    },
    star:{
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


const userModel = mongoose.model('userComment', userSchema);

export default userModel;