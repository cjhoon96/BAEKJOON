const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

db.sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;