const { Sequelize, DataTypes } = require("sequelize");
const Users = require("../models/users")

let addNewUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await Users.create({
      name: name,
      email: email,
    });
    console.log("New user inserted");
    res.status(201).send(`name:${name} email:${email} inserted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

const getUser = async (req, res) => {
  try {
    const users = await Users.findAll();
    const result = users.map((u) => u.toJSON());
    console.log("All users fetched");
    res.status(200).json({
      message: "Users fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
    addNewUser,
    getUser,
}