const { User } = require('../models');

const userData = [{
  username: 'JohnSmith',
  password: 'password25'

},
{
  username: 'KarenT',
  password: 'kt100500'
},
{
  username: 'KarlBrownJr',
  password: 'kbj151515'
},
{
  username: 'Todd',
  password: 'toddpassword1'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;