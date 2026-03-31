const connection = require("../utils/db_connection");

let addNewUser = (req, res) => {
    const { name, email } = req.body;
    const insertQuery = `
    INSERT INTO Users(name, email)
    values(?,?)
    `
    connection.execute(insertQuery, [name, email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        } else {
            console.log("New user inserted");
            res.status(200).send(`name:${name} email:${email} inserted`);
        }
    })
}

const getUser = (req, res) => {
  const getQuery = `
        SELECT * FROM Users;
    `;
  connection.execute(getQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else {
      res.status(200).json({
        message: "Users fetched successfully",
        data: result,
      });
    }
  });
};

module.exports = {
    addNewUser,
    getUser,
}


// else if(result.affectedRows)