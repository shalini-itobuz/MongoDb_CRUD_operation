import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
// import dotenv from "dotenv/config";

const app = express();
const PORT =  8000 || process.env.PORT ;

app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/user_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
