const app = require('../server')
const request = require('supertest')


describe('POST /api/auth/login', () => {

    test('should respond status 400 if email or password empty', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: '',
            password: ''
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email not valid', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'sinokel402@octovie.com',
            password: 'pass'
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email or password incorect', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'gmail@gmail.com',
            password: 'password'
        })

        expect(res.statusCode).toBe(400)
    })

    test('should respond status code 200 if user successfuly logined', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'podida1379@subdito.com',
            password: 'password'
        })

        expect(res.statusCode).toBe(200)

    })

});

describe('POST /api/auth/register', () => {

    test('should respond status 400 if email alredy taken', async () => {
        const res = await request(app).post('/api/auth/register').send({
            name: 'Boubker',
            email: 'podida1379@subdito.com',
            password: 'pass',
            password2: 'pass',
            
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if value empty', async () => {
        const res = await request(app).post('/api/auth/register').send({
            name: '',
            email: '',
            password: '',
            password2: '',
        })

        expect(res.statusCode).toBe(400)
    });

    // test('should respond status 201 if user create successufly', async () => {
    //     const res = await request(app).post('/api/auth/register').send({
    //         name: 'Boubker',
    //         email: 'boubkerennaqar5@gmail.com',
    //         password: 'pass',
    //         password2 : 'pass'
    //     })

    //     expect(res.statusCode).toBe(201)
    // });

});

describe('POST /api/auth/forgetPassword', () => {
    test('should respond status 400 if email is empty', async() => {
        const res = await request(app).post('/api/auth/forgetPassword').send({
            email : ''
        })

        expect(res.statusCode).toBe(400)
     })

     test('should respond status 200 if User send email for forget pasword', async() => {
        const res = await request(app).post('/api/auth/forgetPassword').send({
            email : 'podida1379@subdito.com'
        })

        expect(res.statusCode).toBe(200)
     })
});


describe('POST /api/auth/resetPassword', () => {
    test('should respond status 400 if password or password2 is empty', async() => {
        const res = await request(app).post('/api/auth/resetPassword/bkhf').send({
            password : '',
            password2 : ''
        })

        expect(res.statusCode).toBe(400)
     })

     test('should respond status 400 if password is not mutch', async() => {
        const res = await request(app).post('/api/auth/resetPassword/bkhf').send({
            password : 'password',
            password2 : 'pass'
        })

        expect(res.statusCode).toBe(400)
     })

    //  test('should respond status 200 if password update successfuly', async() => {
    //     const res = await request(app).post('/api/auth/resetPassword/bkhf').send({
    //         password : 'password',
    //         password2 : 'password'
    //     })

    //     expect(res.statusCode).toBe(200)
    //  })
});





