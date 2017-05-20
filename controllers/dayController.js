const db = require('../models/database');

const dayController = {};

dayController.getRowsForDay = (req, res, next) => {
    let username = req.params.username;
    let day = req.params.day;
    db.conn.query(`SELECT * FROM ${username} WHERE day = '${day}';`, 
        (error, result) => {
            if (error) res.status(400).send(error);
            else res.status(200).send(result.rows);
        })
}

module.exports = dayController;