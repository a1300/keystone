const path = require('path');
const { Text, MongoTextInterface } = require('./Implementation');

module.exports = {
  type: 'Text',
  implementation: Text,
  views: {
    Controller: path.resolve(__dirname, './Controller'),
    Field: path.resolve(__dirname, './views/Field'),
  },
  adapters: {
    mongoose: MongoTextInterface,
  },
};