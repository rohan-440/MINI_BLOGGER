import Blog from "../model/blog.js"

export const createBlog = async (req, res) => {
    try {
        const blog = req.body;
        const newBlog = new Blog(blog);
        await newBlog.save();
        return res.status(200).json({ msg: "create successfully" })
    }
    catch (error) {
        return res.status(404).json({ msg: "error while creation" })
    }

}

// export const getBlog = async (req, res) => {
//     try {
//         const { topic, description } = req.body;
//         // Validate username and password, perform login logic
//         const blog
//         // Example response
//         res.status(200).json();
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

