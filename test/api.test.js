const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏' 
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});



describe('GET /api/user/:userId', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/user/:userId')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'hallo'
      }, done);
  });
});

describe('GET /api/user/:userId/avatar', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/user/:userId/avatar')
      .set('Accept', 'application/stream')
      .expect('Content-Type', /stream/)
      .expect(200, {
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
      }, done);
  });
});

describe('DELETE /api/user/:userId/avatar', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/user/:userId/avatar')
      .set('Accept', 'application/stream')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'was deleted'
      }, done);
  });