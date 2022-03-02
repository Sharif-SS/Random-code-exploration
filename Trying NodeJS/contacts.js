const fs = require('fs') //importing the file system library from node

const file_name = 'contacts_list.csv' //to export the final stuff requested

module.exports.add_contact = (request, response) => { //The actual method where the things happen by the server
    //
    let obj = request.body //accessing the object the client sent in an object that's in the request
    let contact = obj.name+','+obj.email+','+obj.tel+','+obj.address+'\n'

    fs.appendFile(file_name, contact, (err) => { //where the file is made and the if else is for catching errors
        if (err) {

             response.send('User was NOT correctly inserted in the file \n'+ err);

        } else {response.send('User was correctly inserted in the file \n')
        }
     })
}

