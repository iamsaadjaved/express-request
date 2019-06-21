require("./db/mongoose");

const express = require("express");
const app = express();
const profileRoutes = require('./routes/profile-routes')

app.use(profileRoutes)
app.use(express.json());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server is up and runnig on port " + port));
