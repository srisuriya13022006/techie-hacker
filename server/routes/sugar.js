let express = require('express')

// controller functions
const { getSugars, getSugarById, createSugar } = require('../controllers/sugarController.js')

const router = express.Router()

// // require auth for all routes
// router.use(requireAuth)

// GET a SUMMARY
router.get('/', getSugars);

router.post('/create', createSugar)

// GET a SUMMARY by ID
router.get('/:id', getSugarById);



module.exports = router