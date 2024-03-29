require('dotenv').config();
const express = require("express");
const https = require("https");
const app = express();
const hostname = "127.0.0.1"; // Your server ip address
const port = 5008;

const version = "1.0.0";

function getPublicIpAddress(callback) {
  const apiUrl = "https://api.ipify.org?format=json";

  https
    .get(apiUrl, (response) => {
      let data = "";

      // A chunk of data has been received.
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          const publicIpAddress = parsedData.ip;
          callback(null, publicIpAddress);
        } catch (error) {
          callback(error);
        }
      });
    })
    .on("error", (error) => {
      callback(error);
    });
}

app.get("/", (req, res) => {
  getPublicIpAddress((err, publicIpAddress) => {
    if (err) {
      res.status(500).send("Error fetching public IP address");
    } else {
      // Send the public IP address as the response
      res.status(200).send(`Test. he Public IP Address: <strong>${publicIpAddress}<strong>!<p>Hi: ${process.env.NAME}</p>`);
    }
  });
});

app.listen(port, () => {
  console.log(
    `[Version ${version}]: Server running at http://${hostname}:${port}/`
  );
});
