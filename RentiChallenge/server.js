const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const items = require('./routes/api/items');
const books = require('./routes/api/books');
const authors = require('./routes/api/authors');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const config = require('config');


const app = express();

// Bodyparser Middleware
app.use(express.json());

//DB configuration
const db = config.get('mongoURI');

//connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items',items);
app.use('/api/books',books);
app.use('/api/authors',authors);
app.use('/api/users',users);
app.use('/api/auth',auth);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));