const express = require('express');
const mongoose = require('mongoose');
const antennesRoute = require('./controllers/antennes')
const departementRoute = require('./controllers/departements')
const searchesRouter = require('./controllers/searches')
const cors = require('cors')

const port = process.env.PORT || 3001;
mongoose.connect("mongodb://localhost:27017/test_routes_back_front",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

const app = express();
app.use(cors())
app.use(express.urlencoded({
    limit: "50mb",
    extended: false
}));

app.use(express.json({ limit: "50mb" }));

// commencer par localhost:3001/ puis ce qui est ecris ci-dessous + la requete 
app.use('/api', antennesRoute)
app.use('/api/searches', searchesRouter)
app.use('/api/france', departementRoute)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});