const express = require('express')
const mongoose = require('mongoose')
const cors = rewuire('cors')

const app = express()
app.use(cors())
app.use(express.json())