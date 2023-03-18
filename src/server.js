const app = require('./app');
const connectToMongo = require('./database/mongoConnection');

connectToMongo();

const PORT = 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));