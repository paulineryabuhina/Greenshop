const Router = require('express');
const router = new Router();
const plantRouter = require('./plantRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/plant', plantRouter);
router.use('/type', typeRouter);

module.exports = router;
