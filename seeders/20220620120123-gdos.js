'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gdos', [
      {
      gdo: "GDO1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      gdo: "GDO2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      gdo: "GDO3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      gdo: "GDO4",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      gdo: "ALL",
      createdAt: new Date(),
      updatedAt: new Date(),
    },  
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gdos', null, {}); 
  }
};
