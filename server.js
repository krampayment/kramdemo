const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require("axios");
const cors = require('cors');

// HTTP and HTTPS
const fs = require('fs');
const http = require('http');
const https = require('https');

require('dotenv').config();

app = express();

app.use(bodyParser());

app.use(cors());

app.post("/", function(req, res) {

  var data = req.body;

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01",
    method: "POST",
    headers: {
      "Authorization": process.env.MAILCHIMP_KEY
    },
    body: jsonData
  }

  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log("Success");
    }
  })

  /* axios({
    url: "https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01", 
    method: "post",
    data: {
      members: [{
        email_address: "lance_armstrong@gmail.com",
        merge_fields: {
          FNAME: "Lance",
          LNAME: "Armstrong"
        }
      }]
    },
    headers: {
      Authorization: "kram 33818cc8033c094569c248152bb4129b-us3"
    }
  });
  res.send("Get");
  axios.post("https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01", {
    members: [{
      email_address: "lan_arm@gmail.com",
      merge_fields: {
        FNAME: "Lan",
        LNAME: "Arm"
      }
    }]
  },
  {
    headers: {
      "Authorization": "kram 33818cc8033c094569c248152bb4129b-us3"
    }
  })
  .then(response => console.log(response)); */
});

app.post('/checkout/', function(req,res) {
  var data = req.body;

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01",
    method: "POST",
    headers: {
      "Authorization": process.env.MAILCHIMP_KEY
    },
    body: jsonData
  }

  request(options, cors(), function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log("Success");
    }
  })
})

console.log(process.env.NODE_ENV + " HELLO!");
if (process.env.NODE_ENV == "production") {
  // Certificate
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/demo.krampayment.com/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/demo.krampayment.com/cert.pem', 'utf8');
  const ca = fs.readFileSync('/etc/letsencrypt/live/demo.krampayment.com/chain.pem', 'utf8');

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(8443, "0.0.0.0", () => {
    console.log('HTTPS Server running on port 8443');
  });
}

// Starting both http & https servers
const httpServer = http.createServer(app);


httpServer.listen(8080, "0.0.0.0", () => {
  console.log('HTTP Server running on port 8080');
});

//app.listen(process.env.PORT || 9000, "0.0.0.0");