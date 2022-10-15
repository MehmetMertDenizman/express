const express = require('express');
const path = require('path');
 
const app = express();

const logger = require('./middleware/logger')

const PORT = process.env.PORT || 35344;



app.use(logger);

app.use('/api/members', require('./routes/api/members'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));