const express = require('express');
require('dotenv').config();
const app = express();
app.listen(process.env.PORT, () => console.log('Server is on port 3000'));
app.get('/', (req, res) => res.json({message:'Hello, World!'}));