const { Race, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Race model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Race.sync({ force: true }));
    describe('name', () => {
      it('Debería arrojar un error si el name de model Race es null', (done) => {
        Race.create({})
          .then(() => done(new Error('Requiere el parámetro name válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando el parámetro de name es válido', () => {
        Race.create({ name: 'Pug' });
      });
    });
    describe('image', () => {
      it('Debería funcionar cuando image es válido', () => {
        Race.create({ image: 'https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg' });
      });
    });
  });
});

// describe('Dog model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Dog.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Dog.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Dog.create({ name: 'Pug' });
//       });
//     });
//   });
// });