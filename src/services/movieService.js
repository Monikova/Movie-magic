import Movie from "../models/Movie.js";
import Cast from "../models/Cast.js";

const getAll = async () => await Movie.find().lean();

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId);

const getCast = async () => await Cast.find().lean();

export default {
    getAll,
    create, 
    getOne, 
    getCast,
};