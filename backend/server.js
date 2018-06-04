import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

	const app = express()
	const theData = require("./newdata.json")

	app.get("/", (req, res) => {
		res.header("Access-Control-Allow-Origin", "*")
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		res.json(theData)
		}
	)

	app.get("/data", (req, res) => {
		res.header("Access-Control-Allow-Origin", "*")
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

	 	res.json(theData)
	 }
	)

	app.listen(8080, () =>
  	console.log("Example app listening on port 8080!")
	)
