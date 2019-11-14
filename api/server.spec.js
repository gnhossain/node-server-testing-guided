const request = require('supertest');
const server = require('./server.js');

descreibe("server", function(){
    it('should return 200 or',function(){

    })
    descreibe("GET /",function(){
        request(server)
        .get("/")
        .then(res => {
            expect(res.status).toBe(200);
        });
    });
});

it("should return JSON formatted response", function(){
    return request(server)
    .get("/")
    .then (res => {
        expect(res.type).toMatch(/json/i);
    });
});