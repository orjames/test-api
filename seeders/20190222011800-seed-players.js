'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('players', [{
        firstName: 'Lebron',
        lastName: 'James',
        age: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Giannis',
        lastName: 'Antetokuonmpo',
        age: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'James',
        lastName: 'Harden',
        age: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
