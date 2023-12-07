// index.js

const express = require('express');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

const port = process.env.PORT || 3000;
require('dotenv').config()
app.use(express.json());
app.use('/api', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
