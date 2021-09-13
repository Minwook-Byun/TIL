import express from "express";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req,res) => res.redirect("/"));
// Express로 할 일은 views를 설정해주고 render 해주고 나머지는 websocet에서 
const handleListen = () => console.log(`Listening on https://localhost:3000`)
app.listen(3000, handleListen);