import {Schema, model} from 'mongoose'; 

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    age: {
        type: Number, 
        required: [true, 'Age is required'], 
        min: 0, 
        max: 120,
    }, 
    born: {
        type: String, 
        // required: [true, 'Place of birth is required'],
    }, 
    'name-in-movie': {
        type: String, 
        // required: [true, 'Name in movie is required'],
    }, 
    castImage: {
        type: String, 
        // required: [true, 'Image is required'],
    },
    movie: {
        type: Object,
    }
})

const Cast = model('Cast', castSchema); 

export default Cast; 