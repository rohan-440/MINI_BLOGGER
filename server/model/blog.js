import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
})

const blog = mongoose.model('blog', blogSchema);
export default blog;




