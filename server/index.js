const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var axios = require("axios");
var data = JSON.stringify({
  collection: "games",
  database: "DB1",
  dataSource: "csis3380-group-project",
});

// Test api-key: 56nyq9QrPFlGBYivMRZ4GuYzKMn2kPm7MztaDbcQLLsKpIz2dSvQbWqhdSD6eYjI
var config = {
  method: "post",
  url: "https://us-east-1.aws.data.mongodb-api.com/app/data-mfxen/endpoint/data/v1/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "56nyq9QrPFlGBYivMRZ4GuYzKMn2kPm7MztaDbcQLLsKpIz2dSvQbWqhdSD6eYjI",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
