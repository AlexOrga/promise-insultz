const dom = require('./dom');
const data = require('./data');

const buttonEvent = () => {
  $('#insultBtn').click(() => {
    dom.domString(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = buttonEvent;
