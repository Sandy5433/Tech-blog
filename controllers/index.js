const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage.js');
// const dashBoardRoutes = require('./dashboard.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashBoardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
