// Import router package
const router = require('express').Router();
const bmiService = require('../services/bmiService.js');

/* Handle get requests for '/'
/* this is the index or home page
*/


// Endpoint to handle requests for product by id
// req.query version
// req format: /product/byid?id=1
//
router.get('/calculate', (req, res) => {

  // read values from req
  const weight = req.query.weight;
  const height = req.query.height;

  console.log(weight, height) 
  // If params are missing return 400
  if (typeof weight === 'undefined' || typeof height === 'undefined' ) {
    res.statusMessage = "Bad Request - missing weight or height"
    res.status(400).json({ content: 'error' });
  }
  // Get produc
  try {
    // const result = productService.getProductById(id);
    const result = bmiService.calculateBMI(height, weight);
    res.json(result);

    // Send response back to client
    // Catch and send errors  
  } catch (err) {
    res.status(500);

    res.send(err.message);
    console.log(err.message)
  }
});

module.exports = router;
