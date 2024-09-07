const debug = require("debug")("app: module-main");
const express = require("express");
const cors = require("cors");
const app = express();
const {Config}=require('./src/config');
const {OperacionAPI}=require('./src/operacion');

// Admisión de datos json y comunicación de puertos
app.use(express.json());
app.use(cors());

//APIS
OperacionAPI(app)

//LEVANTAMOS EL SERVER
app.listen(Config.port, '0.0.0.0', () => {
    debug(`Servidor escuchando en http://0.0.0.0:${Config.port}`);
});
