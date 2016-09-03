# Angular-based online store with pagination
For those who need a draft for online store with basic features (showcase for goods, items search, items filter, item view magnifier, paginator etc).
The main framework of this application is AngularJS-1. The items data is stored in json-file and getting from it by HTTP GET method.

In order to view correctly, this application should be launched through the server (no matter local or remote). If you want to create server on your local computer you should do the following.

###1. Download and install Node.js.
https://nodejs.org/en/download/

###2. Open the Node.js command prompt, go into the root project folder and install Express.
```$ npm install express```

###3. Create the file server.js inside of root folder and add the following code to this file.
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(7500);
    console.log("server is running at port 7500...");

By doing so you are creating simple local server.

###4. Launch local server from Node.js command prompt.
```$ node server```

You should see the text "server is running at port 7500..." in CLI.

###5. Drop the link ```http://localhost:7500``` in the address bar of your browser. Press Enter and enjoy the magic...

You can also use browser Firefox to view this application without setting up the local server. Just open file ```index.html``` by mentioned browser.

##Acknowledgements
I want to thank Michael Bromley ```https://github.com/michaelbromley``` for his elegant paginator which I used in my application.
