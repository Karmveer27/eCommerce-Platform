import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Mike Hen',
        email: 'mike@email.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'John Hen',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users