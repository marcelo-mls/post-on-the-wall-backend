const app = require('./app');
const connectToMongo = require('./database/mongoConnection');

connectToMongo();

const PORT = 8000;
app.listen(PORT, () => console.info(`server running on port ${PORT}`));