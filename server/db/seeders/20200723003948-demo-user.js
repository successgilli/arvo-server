'use strict';
import 'regenerator-runtime/runtime';
import bcrypt from '../../helpers/bcrypt';

const { v4: uuidv4 } = require('uuid');


const { hash } = bcrypt;

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
   const userPass = await hash('false');
    await queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      email: 'admin@example.com',
      password: userPass,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
