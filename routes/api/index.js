const router = require('express').Router();
// imports our user, post, and comment routes from the api folder
const userRoutes = require('./user_routes.js');
const postRoutes = require('./post_routes.js');
const commentRoutes = require('./comment_routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;