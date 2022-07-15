/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Race, Temperament, conn } = require('../../src/db.js');
// const Temperament = require('../../src/models/Temperament.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height_min: 53.5,
  height_max: 55,
  weight_min: 5,
  weight_max: 6,
  life_span_min: 10,
  life_span_max: 11,
  image: '',
};

describe('Race routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Race.sync({ force: true })
    .then(() => Race.create(dog)));
  describe('GET /api/dogs', () => {
    it('should get 200', () =>
      agent.get('/api/dogs').expect(200)
    );
  });
});






