const {db} = require('./index')
const User = require('./user')
const usersData = require('../data.json')


const insetUsers = ()=>{
    User.create(usersData).then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
  
  }

  insetUsers();