const { Post } = require('../models');

const postData = [{
  title: "How to land that first job?",
  content: "Coding Bootcamp graduate here, interested in hearing how you found your first job in the field?",
  user_id: 1

},
{
  title: "ABC, Always Be Coding!",
  content: "Never forget, that with the more you practice, the more you will learn!",
  user_id: 2
},
{
  title: "How to avoid burnout in the industry",
  content: "Remember to focus on the big picture, and not overwhelm yourself in the day to day. Take breaks when needed to clear your mind",
  user_id: 3
},
{
  title: "Do you miss the office?",
  content: "Since we have been working from home, I have to ask if you miss the office? Most of the time I do not, except on days we got pizza.",
  user_id: 4
}
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;