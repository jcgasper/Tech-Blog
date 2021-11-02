const { Comment } = require('../models');

const commentData = [{
    comment_text: "It can be difficult, but keep applying, studying, and practicing for interviews!",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "I agree, nothing more important than to keep active and consistant!",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "I sometimes struggle and want to quit, then remember how far I have come.",
    user_id: 3,
    post_id: 3
},
{
    comment_text: "I do not miss the office at all, keep me at home!",
    user_id: 4,
    post_id: 4
}
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;