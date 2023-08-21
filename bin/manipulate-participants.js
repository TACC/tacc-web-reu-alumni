const manipulate = require('./manipulate.js');

let data = manipulate.get('./assets/_participants.json');
    data = manipulate.format(data);
    data = manipulate.wrap(data);

module.exports = data;
