const request = require('supertest')('http://localhost:5000/api');
const assert = require('chai').assert;

const movie = { "name": "Marconeitor 3000", "rating": "1", "time": ["1"] }
let id;
describe('movies API', () => {
    it('POST /movie', () => {
        // Make a GET request to the users route 
        return request
            .post('/movie').send(movie).expect(201).then((res)=> id=res.id)
    });
});

describe('movies API', () => {
    it('GET /movie', () => {
        // Make a GET request to the users route 
        return request
            .get('/movie/'+id)
            .expect(200)
            .then((res) => {
                // assert data bieng return to not be empty
                assert(res.data.name == movie.name, 'Failed, not equals name!!');
            });
    });
});

describe('movies API', () => {
    it('DELETE /movie/:id', () => {
        // Make a GET request to the users route 
        return request
            .delete('/movie/'+id)
            .then((res) => {
                // assert data bieng return to not be empty
                assert(res.success == true, 'Movie not found');
                assert(res.data.name == movie.name, 'Failed, not equals name!!');
            });
    });
});