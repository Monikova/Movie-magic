import {connect} from 'mongoose';

export default async function mongooseInit() {
    try {
        const url = process.env.DB_URL;
        await connect(url, {dbName: 'movie-magic'});
        console.log('Connected to DB.');
    } catch (err) {
        console.log('Failed to connect to DB...');
        console.log(err.message);
    }
}