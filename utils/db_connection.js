const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('bookingBus', 'root', 'PRIyaNPRIya', {
  host: 'localhost',
  dialect: 'mysql'
});
  
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
  }
})();

module.exports = sequelize;
