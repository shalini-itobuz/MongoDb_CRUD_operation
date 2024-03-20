import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user_management');

        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        });

        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB');
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
