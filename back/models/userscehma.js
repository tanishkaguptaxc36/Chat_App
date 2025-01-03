import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true, unique: true },
    
},
{
    timestamps: true, //created at and updared at
}
);

const User = mongoose.model("User", userSchema);

export default User;