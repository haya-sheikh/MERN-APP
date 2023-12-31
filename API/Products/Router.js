const app = require('express')
const router = app.Router()
const { getProducts, postProducts, ProductbyBrand, deleteProducts, ProductbyCategory, ProductbyId } = require('./Controller')

router.get('/get-all-products', getProducts)
router.get('/get-product-by-id/:_id', ProductbyId)
router.get('/get-product-by-category/:category', ProductbyCategory)
router.get('/get-product-by-brand/:brand', ProductbyBrand)
router.post('/add-products', postProducts)
router.delete('/delete-products', deleteProducts)


module.exports = router