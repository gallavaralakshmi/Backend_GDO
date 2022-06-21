'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usergoals', [{
      user_id: 1,
      goal_name: "learning about react",
      status: "Completed",
      created_date: '2022-01-07',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      goal_name: "communicating with admins",
      status: "Failed",
      created_date: '2022-02-05',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      goal_name: "integrate the work done by team",
      status: "In Progress",
      created_date: '07-01-2022',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 2,
      goal_name: "communicating with others",
      status: "In Progress",
      created_date: '2022-03-28',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 3,
      goal_name: "integrating with teammembers",
      status: "Failed",
      created_date: '2022-04-12',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 3,
      goal_name: "learning node",
      status: "In Progress",
      created_date: '2022-05-05',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 3,
      goal_name: "innovating about react components",
      status: "In Progress",
      created_date: '2022-06-01',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 5,
      goal_name: "associating team",
      status: "Completed",
      created_date: '2022-05-29',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 10,
      goal_name: "learning nodejs",
      created_date: '2022-02-17',
      status: "Failed",
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 10,
      goal_name: "learning express",
      status: "Failed",
      created_date: '2022-01-14',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 10,
      goal_name: "innovating sequelize concepts to make it easier",
      status: "In Progress",
      created_date: '2022-01-30',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 11,
      goal_name: "communicating with others",
      status: "In Progress",
      created_date: '2022-02-21',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      user_id: 11,
      goal_name: "innovating new concepts",
      status: "Failed",
      created_date: '2022-04-19',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usergoals', null, {}); 
  }
};
