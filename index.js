
const express = require("express");


const app = express();
var session = require('express-session');
app.use(require('body-parser')());
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + "/views");
app.set('view engine', 'pug');
app.use(session({
  maxAge: 600000,
  secret: 'knight',
  resave: true,
  saveUninitialized: false
}));
/*
app.use(session({
  maxAge:600000,
  secret: 'ninchat',
  resave: true,
  saveUninitialized: false
}));
*/

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Methods", "PUT,DELETE,POST,GET")
  next();
});

const httpServer = require("http").createServer(app);

const { Server } = require("socket.io");
const io = new Server(httpServer);

app.get("/", (req,res) =>res.render("index"));;



httpServer.listen(process.env.PORT || 3000, async () => {
  //RouteControl.watch.signalsWatcher.start();
  console.log("Destiny Autos Running")
})
