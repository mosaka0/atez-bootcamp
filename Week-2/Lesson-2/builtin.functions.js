// commonJs
// modulejs
// npm install process
import process from 'process'; // type: module
//const process = require('process'); // type: commonjs
import os from 'os';


console.log(process.argv);
console.log(process.env);
console.log("development env:", process.env.NODE_ENV); //the term is not recognized
