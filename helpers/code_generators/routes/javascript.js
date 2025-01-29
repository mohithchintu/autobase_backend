export const generateExpressCode = (method, path, func) => {
  return `
  const express = require('express');
  const router = express.Router();
  
  router.${method}('${path}', '${func}');
  
  module.exports = router;
    `;
};
