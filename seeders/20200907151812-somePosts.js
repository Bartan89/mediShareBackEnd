"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          content: "We hope to see you all at today's #AgConnect! We're excited to share Bayer's different #OpenInnovation opportunities with you. This is your last chance to register before this evening! #virtualnetworking https://lnkd.in/eXQj5am",
          status: "Draft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "AI will enable better... and earlier diagnosis with better treatment options. The patients are the big winner in this game. Our CMO, Mathias Goyen, Prof. Dr.med. shared his thoughts on how AI will help doctors and ultimately patients. Learn more about his insights here: https://invent.ge/32NkpyA",
          status: "Draft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "AstraZeneca has signed an agreement with the Australian Government to supply approximately 34 million doses of its COVID-19 vaccine candidate, AZD1222, should ongoing clinical trials prove successful.",
          status: "Draft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "In the fight against #COVID19, we’re leaving no stone unturned. Each day, our scientists and other team members are putting their passion and know-how to work, developing potential vaccines and therapeutics. Featuring interviews with our top scientists and footage shot by our colleagues in two laboratories located near the pandemic's initial epicenter in the U.S., watch the scientific frontlines of this pivotal moment. #ScienceWillWin #PfizerProud",
          status: "Draft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "We’re LIVE with Angela Hwang, our Biopharma Group President and Fatima Goss Graves, President & CEO National Women's Law Center & Co-founder of Time’s Up Legal Defense fund talking equity and social reform.",
          status: "Draft",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
