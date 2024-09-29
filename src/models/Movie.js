import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
    },    
    genre: {
        type: String,
        // required: [true, 'Genre is required!'],
    }, 
    director: {
        type: String,
        // required: [true, 'Director is required!'],
    }, 
    year: {
        type: Number,
        // required: [true, 'Year is required!'],
        min: 1900, 
        max: 2024,
    }, 
    rating: {
        type: Number,
        // required: [true, 'Rating is required!'],
        min: 0, 
        max: 10,
    }, 
    description: {
        type: String,
        // required: [true, 'Description is required!'],
        // maxlength: 200,
    },
    imageUrl: {
        type: String,
        // required: [true, 'Image is required!'],
    }, 
    cast: {
        type: Array,
    },
}); 

const Movie = model('Movie', movieSchema);

export default Movie;