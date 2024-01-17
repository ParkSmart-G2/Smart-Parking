
const User = require('../models/user')

const Reservation = require('../models/reservation');

const Feedback = require('../models/feedback');



const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json({ users: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const UsersInSpot = async (req, res) => {
    try {
        const usersInSpot = await User.find({ status: 'inspot' });

        res.status(200).json({ users: usersInSpot });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const UsersReserved = async (req, res) => {
    try {
        const usersReserved = await User.find({ status: 'reserved' });

        res.status(200).json({ users: usersReserved });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const UsersNotReserving = async (req, res) => {
    try {
        const usersNotReserving = await User.find({ status: 'notReserving' });

        res.status(200).json({ users: usersNotReserving });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const allSpots = async  (req, res) => {
    try {
      const userEmail = req.params.userEmail; 
      
      const user = await User.findOne({ 'user.email': userEmail, isAdmin: true });
      if (!user) {
        return res.status(404).json({ message: 'Admin not found' });
    }
      res.status(200).json({ totalSpots: user.totalSpots });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };



const modifySpotsNumber = async (req, res) => {
    try {
        const userEmail = req.params.userEmail; // assuming it's userEmail, adjust it accordingly
        const user = await User.findOne({ email: userEmail, isAdmin: true });

        if (!user) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        
        user.totalSpots = req.body.totalSpots;

        await user.save();

        res.status(200).json({ user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const getPayments = async (req, res) => {
    try {
        const payments = await Reservation.find({}, 'price');
        
        // Extract prices and calculate the total sum
        const totalSum = payments.reduce((sum, payment) => sum + payment.price, 0);

        // Round to one decimal place
        const roundedTotalSum = parseFloat(totalSum.toFixed(1));

        res.status(200).json({ totalSum: roundedTotalSum });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUserPayments = async (req, res) => {
    try {
        const userPayments = await Reservation.aggregate([
            {
                $group: {
                    _id: '$user.email', 
                    totalPayment: { $sum: '$price' } 
                }
            },
            {
                $project: {
                    user: '$_id',
                    totalPayment: { $round: ['$totalPayment', 1] }, // Round to one decimal place
                    _id: 0
                }
            }
        ]);

        res.status(200).json({ userPayments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const submitFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getFeedback = async (req, res) => {
    try {
        const allFeedback = await Feedback.find();
        console.log(allFeedback,'allFeedback',); // Check if data is retrieved
        res.status(200).json(allFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteFeedback = async (req, res) => {
    const { feedbackId } = req.body;
  
    if (!feedbackId) {
      return res.status(400).json({ error: 'Invalid feedbackId' });
    }
  
    feedbackData = feedbackData.filter((feedback) => feedback._id !== feedbackId);
  
    res.json({ success: true });
  };

module.exports = {
    
    getAllUsers,
    UsersInSpot,
    UsersReserved ,
    UsersNotReserving,
    allSpots,
    modifySpotsNumber,
    getPayments,
    submitFeedback,
    getUserPayments,
    getFeedback,
    deleteFeedback,

  };
  