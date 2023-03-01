const { log } = require('console');
const fs = require('fs');

const user = {
    id: 1,
    name: 'John',
    age: 22
  }
  
  // convert JSON object to a string
  const data = JSON.stringify(user)
  console.log(data);



  
  // write JSON string to a file
  // fs.writeFile('user.json', data, err => {
  //   if (err) {
  //     throw err
  //   }
  //   console.log('JSON data is saved.')
  // })