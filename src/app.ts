import "colors";
import env from "dotenv";
import express from "express";
import fetch from "node-fetch";
env.config();

// Discord Bot
import DarkoBot from "./discord/DarkoBot";
DarkoBot.init(() => console.log("DarkoBot Online"));

// Express Server
const app = express();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`.blue);
});

app.get("/", (req, res) => {
	res.send("DarkoBot Online");
});

// Avoid heroku sleep
async function AutoCallLoop() {
	const URL = process.env.APP_URL;
	if (URL) {
		fetch(URL);
	}
	setTimeout(() => {
		AutoCallLoop();
	}, 1500000);
}
// AutoCallLoop();
