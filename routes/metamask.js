const router = require('express').Router();
const ropsten = require('../Controller/ropsten.js')
const bsc = require('../controller/bsc.js')

router.get('/ropsten/transaction', ropsten.transaction)
router.get('/ropsten/balance', ropsten.balance)

router.get('/bsc/transaction', bsc.transaction)
router.get('/bsc/balance', bsc.balance)


module.exports = router;