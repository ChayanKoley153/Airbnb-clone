const bookingModel = require('../models/Bookings');

const newBooking = async (req, res) => {
    const { movie, date, seatNumber , user} = req.body;

    try {
        if (!movie || !date || !seatNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBooking = await bookingModel.create({
            movie,
            date: new Date(`${date}`), 
            seatNumber,
            user
        });

        if (!newBooking) {
            return res.status(400).json({ message: "Failed to add booking" });
        } else {
            return res.status(200).json({
                message: "Booking added successfully",
                booking: newBooking
            });
        }

    } catch (error) {
        console.error("Error adding booking:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = {
    newBooking
};