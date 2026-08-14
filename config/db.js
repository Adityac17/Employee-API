const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://2025adityac_db_user:F6srJ23jpNjSDwQE@cluster0.b2tjeky.mongodb.net/?appName=Cluster0')

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Database connected successfully');
});
db.on('error', (error) => {
    console.log('Database connection error:', error);
});
db.on('disconnected', () => {
    console.log('Database disconnected');
});
module.exports = db;
