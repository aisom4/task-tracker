//setting up server using express.

const express = require("express");
const app = express();
const port = 3006;

app.use(express.static("tracker")); // grabs static files from files directory

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/app/index.html");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

// While creating the app, dynamic programing was an issue I had to face. Creating elements on the javascript page and altering them as the user interacts. I ran into errors with deployment and not using a database such as MongoDB. I was able to begin the server using express and my task tracker works on the local server.
