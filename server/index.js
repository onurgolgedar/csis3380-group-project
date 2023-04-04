require('dotenv').config({ path: './config.env' });
const databaseOperations = require('./operations.js');
const express = require('express');
const router = require('./router.js');

const app = express();
app.use(express.json());
app.use('/api', router);

databaseOperations.connectMongoose(`mongodb+srv://group7:${process.env.DB_MONGODB_PASSWORD}@csis3380-group-project.vgzocak.mongodb.net/DB1`)
                  .then(() => databaseOperations.initializeDB());
app.listen(process.env.DB_PORT, () => { console.log(`Server is running on port: ${process.env.DB_PORT}`); });