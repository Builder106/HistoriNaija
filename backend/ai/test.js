// This is to test if the .env is working well

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: '../../.env'});

console.log(process.env.OPEN_AI_KEY);
// if you get undefined then check the path  of .env or check if you typed the variable name for the OPEN_AI_KEY correctly