const User = require("./users");
const Booking = require("./bookings");
const Bus = require("./buses");

// one to many
User.hasMany(Booking)
Booking.belongsTo(User);

// one to many
Bus.hasMany(Booking)
Booking.belongsTo(Bus);

module.exports = {
    User,
    Booking,
    Bus
}