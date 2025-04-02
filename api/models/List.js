const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
    {
        // require is for the schemas to show up
        title: { type: String, required: true, unique: true },
        type: { type: String },
        genre: { type: String },
        content: { type: Array }
    }, 
    { timestamps: true }
);

module.export = mongoose.model("List", UserSchema);