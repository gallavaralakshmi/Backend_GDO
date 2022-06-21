'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
      role: "SAdmin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role: "Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role: "Employee",
      createdAt: new Date(),
      updatedAt: new Date(),
    },      
  ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {}); 
  }
};
