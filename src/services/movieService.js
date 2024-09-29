import Movie from "../models/Movie.js";

const getAll = async () => await Movie.find().lean();

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId);

export default {
    getAll,
    create, 
    getOne
};