const TransportFee = require("./transportFee");
const express = require("express");

// npm install --save express-handlebars
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); 	// add this line

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add  this line

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const transportFee = TransportFee();

// after you added  this  restart the app
app.get("/", function(req, res){
	const moreThanThreeTimes = transportFee.getMorningCount() > 2;
	let yellow = "";
	if (moreThanThreeTimes) {
		yellow = "yellow";
	}
	res.render("index", {yellow} );
});

app.post("/fee", function(req, res){
	console.log(req.body);
	const price = transportFee.getPrice(req.body.shift);
	const morningCounter = transportFee.getMorningCount();
	res.render("fee", {price, morningCounter});
});

app.get("/fee/:shift", function(req, res){
	const price = transportFee.getPrice(req.params.shift);
	const morningCounter = transportFee.getMorningCount();
	res.render("fee", {price, morningCounter});
});

app.post("/reset", function(req, res) {
	transportFee.resetMorningCount();
	res.redirect("/");
})

const PORT = process.env.PORT || 3007;

app.listen(PORT, function() {
	console.log("App started on port " + PORT);
});