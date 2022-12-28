const app = require('../server');
const request = require('supertest');

describe('GET /api/project/getAllProject', () => {
  test('should respond status 200 if project found', async () => {
    const res = await request(app).get('/api/project/getAllProject');

    expect(res.statusCode).toBe(200);
  });

});

describe('POST /api/project/addProject', () => {
    test('should respond status 201 if project created', async () => {
        const res = await request(app).post('/api/project/addProject').send({
        title: 'title',
        techno: 'techno',
        description: 'description',
        });
    
        expect(res.statusCode).toBe(200);
    });

    test('should respond status 400 if req.body is empty', async () => {
        const res = await request(app).post('/api/project/addProject').send({
        title: '',
        techno: '',
        description: '',
        });
    
        expect(res.statusCode).toBe(400);

    });
});

describe('GET /api/project/getProject/:id', () => {
    test('should respond status 200 if project found', async () => {
        const res = await request(app).get('/api/project/getProjectById/63ab724921bb7d559d7cd152');
    
        expect(res.statusCode).toBe(200);
    });

    test('should respond status 404 if project not found', async () => {
        const res = await request(app).get('/api/project/getProjectById/60a2c2d7f1b1e40015c7b0d2');
    
        expect(res.statusCode).toBe(404);
    });
});
