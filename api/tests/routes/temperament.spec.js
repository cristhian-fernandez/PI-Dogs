/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Race, Temperament, conn } = require('../../src/db.js');

const agent = session(app);

const temperament = {
  "name": "Active"
};


describe('Temperament routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se puede conectar a la base de datos:', err);
  }));
  beforeEach(() => Temperament.sync({ force: true })
    .then(() => Temperament.create(temperament)));
  describe('GET /api/temperaments', () => {
    it('should get 200', () =>
      agent.get('/api/temperaments').expect(200)
    );
  });
});






