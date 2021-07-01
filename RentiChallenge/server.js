const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');
const books = require('./routes/api/books');
const authors = require('./routes/api/authors');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items',items);
app.use('/api/books',books);
app.use('/api/authors',authors);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));