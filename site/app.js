// Require
const express = require("express");
const path = require("path");

// Functions
const app = express();

// Uso de engine
app.set("view engine", "ejs");

// Puerto
app.listen(3001, () => console.log("puerto funcionando 3001"));

// Archivos por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.resolve(__dirname, "./src/public")));

// RUTAS
const mainRoutes = require("./routes/main");
const hostRoutes = require("./routes/host");
const userRoutes = require("./routes/user");
app.use("/", mainRoutes);
app.use("/host", hostRoutes);
app.use("/user", userRoutes);
