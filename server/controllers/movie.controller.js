const movieModel = require('../models/Movie');


const addMovie = async (req, res) => {

    jwt.verify(extractedToken, process.env.JWT_SECRET, async (err, decrypted) => {
        if (err) {
            return res.status(403).json({ message: `${err.message}` });
        } else {
            adminI
        }

    
    });

    const { title, description, releaseDate, posterUrl, featured, actors } = req.body;

    try {
        if (!title || !description || !releaseDate || !posterUrl) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newMovie = await movieModel.create({
            title,
            description,
            releaseDate: new Date(`${releaseDate}`),
            featured,
            actors,
            posterUrl,
        });

        if (!newMovie) {
            return res.status(400).json({ message: "Failed to add movie" });
        } else {
            return res.status(200).json({
                message: "Movie added successfully",
                movie: newMovie
            });
        }

    } catch (error) {
        console.error("Error adding movie:", error.message);
        return res.status(400).json({ message: "Internal server error" });
    }
}


module.exports = {
    addMovie
};