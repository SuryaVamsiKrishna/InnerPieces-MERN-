const bcrypt = require('bcryptjs');
const users = 
[
    {
        name: 'Bing',
        email: 'admin@zk.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
    },
    {
        name: 'Jon',
        email: 'jon@zk.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false
    },
];

module.exports = users
