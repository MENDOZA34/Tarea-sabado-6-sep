
// src/controllers/procesos.controller.js
const ProcesoModel = require('../models/procesos.model');

const index = (req, res) => {
  const procesos = ProcesoModel.getAll();
  res.render('procesos', { procesos });
};

module.exports = { index };
