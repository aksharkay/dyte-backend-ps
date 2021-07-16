const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()

var controller = require('./app')

connectDB()