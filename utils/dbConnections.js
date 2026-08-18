const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expressdb','root','root',
{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{try {

    await sequelize.authenticate();
    console.log("connection to the db has been created");
}
catch(err){
  console.log(err);
}})();

module.exports=sequelize;













// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:"student_db"
// })
// connection.connect((err)=>
// {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connection has been created");

//     // const creationQuery = `create table IF NOT EXISTS Students(
//     // id INT AUTO_INCREMENT PRIMARY KEY,
//     // name VARCHAR(20),
//     // email VARCHAR(20)
//     // )`

//     // connection.execute(creationQuery,(err)=>{
// //         if(err){
// //             console.log(err);
// //             connection.end();
// //             return;
// //         }
        

// //         console.log("Table is created");
// //     })
// })

// module.exports = connection;
