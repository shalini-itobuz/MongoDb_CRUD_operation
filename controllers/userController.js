import User from '../models/User.js';

const userController = {
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json({data:newUser, status:201,message:"User created successfully"});
        } catch (err) {
            res.status(400).json({ message: err.message , status:400 ,message:"Error creating user"});
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({data:users, status:200,message:"User data retrived successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({data:user , status:200, message:"User of that oarticular id retrived"});
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async updateUserById(req, res) {
        try {
            const userId = req.params.id;
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async deleteUserById(req, res) {
        try {
            const userId = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

export default userController;
