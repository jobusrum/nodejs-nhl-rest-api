# NHL REST API in Node.js

This hockey application is written in Node.js. It uses the Axios package to call the REST API of nhl.com, and parses the JSON results to extract team names. It uses the "Embedded JavaScript" (EJS) engine to generate HTML. It then uses Express to handle web requests and send the web page to the browser.

- [nhl.js](src/nhl.js) - This file is responsible for using Axios to call the nhl.com REST API. It then parsing the JSON to extract team names, and returns a JSON array to the caller.

- [views/home.ejs](views/home.ejs) - This file is the EJS template that accepts a string array, and then iterates through it to display the team name.

- [server.js](src/server.js) - This file is responsible for setting up a server to respond to web requests on port 8080. It contains a 'get' handler that calls a method in 'nhl.js' to retrieve data from a REST API, and then sends the data to the EJS html engine, and returns the generated HTML to the browser.

![Screenshot](/images/NHL_Teams.png)

