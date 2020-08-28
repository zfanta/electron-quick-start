// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./${(new Date()).getTime()}.sqlite`
})

sequelize.define('User', {
  firstName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.DataTypes.STRING
  }
});

sequelize.sync()
