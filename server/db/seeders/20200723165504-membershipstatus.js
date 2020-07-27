// 'use strict';

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
//     await queryInterface.bulkInsert('MembershipStatuses', [{
//        id: 1,
//        name: 'lga exco',
//        createdAt: new Date(),
//        updatedAt: new Date()
//      },
//      {
//       id: 2,
//       name: 'lga ward exco',
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//     await queryInterface.bulkDelete('MembershipStatuses', null, {});
//   }
// };
