const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require("axios");
const cors = require('cors');

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

  // axios({
  //   url: "https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01", 
  //   method: "post",
  //   data: {
  //     members: [{
  //       email_address: "lance_armstrong@gmail.com",
  //       merge_fields: {
  //         FNAME: "Lance",
  //         LNAME: "Armstrong"
  //       }
  //     }]
  //   },
  //   headers: {
  //     Authorization: "kram 33818cc8033c094569c248152bb4129b-us3"
  //   }
  // });
  // res.send("Get");
  // axios.post("https://us3.api.mailchimp.com/3.0/lists/03cfc8aa01", {
  //   members: [{
  //     email_address: "lan_arm@gmail.com",
  //     merge_fields: {
  //       FNAME: "Lan",
  //       LNAME: "Arm"
  //     }
  //   }]
  // },
  // {
  //   headers: {
  //     "Authorization": "kram 33818cc8033c094569c248152bb4129b-us3"
  //   }
  // })
  // .then(response => console.log(response));
});

app.listen(9000, function(req, res) {
  console.log("Server running on port 3000");
});