// 'use strict';
// import faker from 'faker';

// const captures = Array(13).fill(0).map((item, index) => {
//   return {
//     id: index,
//     firstname: faker.name.firstName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//     lgaId: 1,
//     wardId: 1,
//     puId: 'ward1',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }
// });

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//     await queryInterface.bulkInsert('DataCaptures', captures, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('DataCaptures', null, {});
//      */
//     await queryInterface.bulkDelete('DataCaptures', null, {});
//   }
// };
