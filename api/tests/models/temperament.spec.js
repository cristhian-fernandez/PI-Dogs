const { Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('Debería arrojar un error si el name del model Temperament es nulo', (done) => {
        Temperament.create({})
          .then(() => done())
          .catch(() => done(new Error('El parámetro name de Temperament model acepta null')));
      });
      it('Debería funcionar cuando el name del model Temperament es válido', () => {
        Temperament.create({ name: 'Active' });
      });
    });
  });
});

