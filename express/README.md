# Express
## Express Setup
After setting up Angular it is now time to setup the Express server. The Express Server is a Node.js application framework with tools that allow for the easy creation of REST APIs. To begin with the setup install the following packages:
```
npm install express mysql cors
```
After the installation of the above packages, open the file './express/server.js'. Within this file you will see the following:
```
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SuperSecretPassword",
    database:"github_db",
    port:"32700"
});
```

This is where you will fillout the data you saved from the [MySql Setup](#mysql-setup). This section of server.js is responsible for connecting to the database. So make sure the information here is correct.

After The data has been entered is is time to test the configuration. To do so navigate to the './express/ folder in a terminal of your choosing and execute the command: ```node server.js```. This command will start the Express Server. At this point if you dont see an error then you are good to go, otherwise, troubleshoot.

### For Installation of other services see [README.md](../README.md)