'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Pus', [{
    id: 'ward1',
    name: 'Oredo ward pu',
    wardId: 1,
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
   id: 'ward2',
   wardId: 1,
   name: 'Akoko edo ward pu',
  createdAt: new Date(),
  updatedAt: new Date()
 }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Pus', null, {});
     */
    await queryInterface.bulkDelete('Pus', null, {});
  }
};
