import express from 'express';
import * as mongoose from 'mongoose';


const app = express();

mongoose.connect('mongodb://mongo:27017/my-app')
    .then(() => console.log('Connected to MongoD'))
    .catch(err => console.error('Could not connect to MongoDB', err));


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3001');
});