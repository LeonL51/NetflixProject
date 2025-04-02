const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        // require is for the schemas to show up
        title: { type: String, required: true, unique: true },
        desc: { type: String },
        img: { type: String },
        imgTitle: { type: String },
        imgSm: { type: String }, 
        trailer: { type: String }, 
        video: { type: String }, 
        year: { type: String }, 
        limit: { type: Number }, 
        genre: { type: String },
        isSeries: { type: Boolean, default: false }
    }, 
    { timestamps: true }
);

module.export = mongoose.model("Movie", UserSchema);