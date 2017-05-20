const db = require('../models/database');

const savedRecipeController = {};

savedRecipeController.deleteRow = (req, res, next) => {
    let username = req.params.username;
    let day = req.params.day;
    let label = req.params.label;
    db.conn.query(``)
}

module.exports = savedRecipeController;