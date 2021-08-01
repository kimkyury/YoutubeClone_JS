import mongoose from "mongoose";


const videoSchma = new mongoose.Schema ({
    title: String,
    dexription : String,
    createAt ; date,
    hashtags: [{ type: String}],
    meta: {
        views: Number,
        rating: Number,
    },
});


const Video  mongoose.model("Video", videoSchema;
export default Video;
