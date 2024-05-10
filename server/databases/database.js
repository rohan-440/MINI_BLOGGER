import mongoose from 'mongoose';

// Connection URI
const uri = "mongodb+srv://blog:blog@blog.cxjsfml.mongodb.net/?retryWrites=true&w=majority&appName=blog";

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Call the async function to connect to the database
connectToDatabase();

// Get the default connection
const db = mongoose.connection;

// Export the connection
export default db;
