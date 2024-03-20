import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectDB from './connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use('/api', userRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
