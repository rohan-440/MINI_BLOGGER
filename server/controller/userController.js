import User from "../model/user.js";


export const registerUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({ msg: "register successfully" })
    }
    catch (error) {
        return res.status(404).json({ msg: "error while register" })
    }

}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Validate username and password, perform login logic

        // Example response
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};