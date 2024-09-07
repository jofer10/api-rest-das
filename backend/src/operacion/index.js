const express = require("express");
const router = express.Router();
const { OperacionController } = require("./controller");

module.exports.OperacionAPI = (app) => {
  router
  .post("/", OperacionController.operar)
  .post("/suma", OperacionController.sumar);

  app.use("/api/operacion", router);
};
