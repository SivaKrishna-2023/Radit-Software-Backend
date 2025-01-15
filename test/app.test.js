const chai = require('chai');
const expect = chai.expect;
const app = require('../server'); // Import your app
const request = require('supertest');

describe('GET /', () => {
  it('should return Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
