const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expressdb", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been created");
    } catch (err) {
        console.log(err);
    }
})();

module.exports = sequelize;