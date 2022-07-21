require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT


const app = express();
require("./config")(app);


// 👇 MIDDLEWARE MISSING
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

<<<<<<< HEAD
const commentRouter = require("./routes/comment.routes");
app.use("/api", commentRouter);

=======
const placeRoutes = require("./routes/place.routes");
app.use("/api", placeRoutes);

const jamRoutes = require('./routes/jam.routes')
app.use("/api", jamRoutes);

const userRoutes = require('./routes/user.routes')
app.use("/api", userRoutes);
>>>>>>> 071f6a7df0d72d86c141d7bd7500c27bf6917f43


// app.use((req, res, next) => {
//     // If no routes match, send them the React HTML.
//     res.sendFile(__dirname + "/public/index.html");
//   });

// require("./error-handling")(app);

module.exports = app;
