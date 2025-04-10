const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        // require is for the schemas to show up
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePic: { type: String, default: "" },
        isAdmin: { type: Boolean, default: false },
    }, 
    { timestamps: true }
);

module.export = mongoose.model("User", UserSchema);